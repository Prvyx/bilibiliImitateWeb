package com.prvyx.service.video;

import com.prvyx.mapper.user.UserCoinRecordMapper;
import com.prvyx.mapper.video.VideoCoinMapper;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 15:47
 */

public class UserCoinRecordS {
    public Boolean userCoinRecord(String userId,String videoId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            Boolean rs1,rs2;
            rs1=sqlSession.getMapper(UserCoinRecordMapper.class).userAddCoinRecord(userId,videoId,new Date())==1;
            rs2=sqlSession.getMapper(VideoCoinMapper.class).addVideoCoin(videoId)==1;
            if(rs1&&rs2){
                sqlSession.commit();
            }
            return rs1&&rs2;
        }
    }
}
