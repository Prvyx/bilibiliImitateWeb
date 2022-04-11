package com.prvyx.service.user;

import com.prvyx.mapper.user.UserStarDirMapper;
import com.prvyx.mapper.video.CheckVideoExistStarDirMapper;
import com.prvyx.mapper.video.DeleteUserStarVideoMapper;
import com.prvyx.mapper.video.InsertUserStarVideoMapper;
import com.prvyx.model.other.NewStarDir;
import com.prvyx.model.domain.UserStarDir;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;
import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 18:53
 */

public class UserStarDirS {
    public List<UserStarDir> getUserStarDirs(String userId,String videoId){
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            List<UserStarDir> userStarDirs=sqlSession.getMapper(UserStarDirMapper.class).getUserStarDirS(userId);
            for(UserStarDir userStarDir:userStarDirs){
                String starDirId=userStarDir.getStar_dir_id();
                userStarDir.setExist(sqlSession.getMapper(CheckVideoExistStarDirMapper.class)
                        .checkVideoExistStarDir(userId,videoId,starDirId)!=null);
            }
            System.out.println(userStarDirs);
            return userStarDirs;
        }
    }

    public Boolean newUserStarDirs(String userId, String videoId, List<NewStarDir> newStarDirs){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            for (NewStarDir newStarDir:newStarDirs){
                System.out.println(newStarDir.getStar_dir_id());
                Boolean rs=sqlSession.getMapper(CheckVideoExistStarDirMapper.class).
                        checkVideoExistStarDir(userId,videoId,newStarDir.getStar_dir_id())!=null;
                // 数据库查询结果rs与newUserStarDir.exist比较 若相同，则不进行操作，否则，进行相应操作
                if(!rs.equals(newStarDir.getExist())){
                    if(rs){//rs为true，newUserStarDir.getExist()为false，删除收藏记录表
                        int deleteRs=sqlSession.getMapper(DeleteUserStarVideoMapper.class).
                                deleteUserStarVideo(userId,videoId,newStarDir.getStar_dir_id());
                        if(deleteRs==1){
                            sqlSession.commit();
                        }
                    }else {//rs为false，newUserStarDir.getExist()为true，插入相应记录
                        System.out.println(userId);
                        System.out.println(videoId);
                        System.out.println(newStarDir.getStar_dir_id());
                        int insertRs=sqlSession.getMapper(InsertUserStarVideoMapper.class).
                                insertUserStarVideo(userId,videoId,new Date(),newStarDir.getStar_dir_id());
                        if(insertRs==1){
                            sqlSession.commit();
                        }
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }

        return true;
    }
}
