package com.prvyx.service.user;

import com.prvyx.mapper.user.UserFanMapper;
import com.prvyx.mapper.user.UserFocusMapper;
import com.prvyx.mapper.user.UserThumbUpRecordMapper;
import com.prvyx.mapper.video.VideoThumbUpMapper;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:用户关注其它用户
 * @author: Prvyx
 * @created: 2022/04/10 02:24
 */

public class UserFocusS {
    public Boolean userFocus(String userId,String focusUserId,Boolean isFocus){
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            Boolean rs1,rs2;
            if(isFocus){
                rs1=sqlSession.getMapper(UserFocusMapper.class).userAddFocusRecord(userId,focusUserId,new Date())==1;
                rs2=sqlSession.getMapper(UserFanMapper.class).addFan(focusUserId)==1;
            }else {
                rs1=sqlSession.getMapper(UserFocusMapper.class).userDeleteFocusRecord(userId,focusUserId)==1;
                rs2=sqlSession.getMapper(UserFanMapper.class).subFan(focusUserId)==1;
            }
            if(rs1&&rs2){
                sqlSession.commit();
            }
            return rs1&&rs2;
        }
    }
}
