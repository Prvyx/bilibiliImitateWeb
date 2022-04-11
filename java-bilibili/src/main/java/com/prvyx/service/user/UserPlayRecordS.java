package com.prvyx.service.user;

import com.prvyx.mapper.user.UserPlayRecordMapper;
import com.prvyx.mapper.video.VideoPlayCountMapper;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 12:15
 */

public class UserPlayRecordS {
    public Boolean userPlayRecordC(String userId,String videoId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            Boolean rs1=sqlSession.getMapper(UserPlayRecordMapper.class).userPlayRecord(userId,videoId,new Date())==1;
            Boolean rs2=sqlSession.getMapper(VideoPlayCountMapper.class).updateVideoPlayCount(videoId)==1;
            if(rs1&&rs2){
                sqlSession.commit();
            }
            return rs1&&rs2;
        }
    }
}
