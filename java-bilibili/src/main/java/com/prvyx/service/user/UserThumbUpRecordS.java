package com.prvyx.service.user;

import com.prvyx.mapper.user.UserThumbUpRecordMapper;
import com.prvyx.mapper.video.VideoThumbUpMapper;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 12:59
 */

public class UserThumbUpRecordS {
    public Boolean userThumbUpRecord(String userId,String videoId,Boolean isThumbUp){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            Boolean rs1,rs2;
            if(isThumbUp){
                rs1=sqlSession.getMapper(UserThumbUpRecordMapper.class).userAddThumbUpRecord(userId,videoId,new Date())==1;
                rs2=sqlSession.getMapper(VideoThumbUpMapper.class).addVideoThumbUp(videoId)==1;
            }else {
                rs1=sqlSession.getMapper(UserThumbUpRecordMapper.class).userDeleteThumbUpRecord(userId,videoId)==1;
                rs2=sqlSession.getMapper(VideoThumbUpMapper.class).subVideoThumbUp(videoId)==1;
            }
            if(rs1&&rs2){
                sqlSession.commit();
            }
            return rs1&&rs2;
        }
    }
}
