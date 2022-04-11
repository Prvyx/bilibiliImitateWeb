package com.prvyx.service.user;

import com.prvyx.mapper.user.CreateNewStarDirMapper;
import com.prvyx.utils.MybatisUtils;
import com.prvyx.utils.UUIDUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @program: java-bilibili
 * @description:新建收藏夹的控制层
 * @author: Prvyx
 * @created: 2022/04/10 22:55
 */

public class CreateNewStarDirS {
    public Boolean createNewStarDir(String userId,String starDirTitle){
        String starDirId= UUIDUtils.getRandomVidByUUID(10);
        int starDirCategory=1;
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            if(sqlSession.getMapper(CreateNewStarDirMapper.class)
                    .checkStarDirId(starDirId)==null&&sqlSession.getMapper(CreateNewStarDirMapper.class)
                    .checkStarDirTitle(starDirTitle)==null
            ){
                int rs=sqlSession.getMapper(CreateNewStarDirMapper.class)
                        .createNewStarDir(starDirId,starDirCategory,userId,starDirTitle);
                if(rs==1){
                    sqlSession.commit();
                    return true;
                }
            }
        }
        return false;
    }
}
