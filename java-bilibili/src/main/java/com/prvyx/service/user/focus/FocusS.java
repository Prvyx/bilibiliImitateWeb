package com.prvyx.service.user.focus;

import com.prvyx.mapper.user.focus.FocusMapper;
import com.prvyx.model.domain.focus.FollowerOrFocus;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.Date;
import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/05/07 02:02
 */

public class FocusS {
    public boolean isFocus(String userId,String otherId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()) {
            String s=sqlSession.getMapper(FocusMapper.class).isFocus(userId,otherId);
            return s!=null&&s.length()!=0;
        }
    }

    public List<FollowerOrFocus> whoFocusMe(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(FocusMapper.class).whoFocusMe(userId);
        }
    }
    public List<FollowerOrFocus> iFocusWho(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(FocusMapper.class).iFocusWho(userId);
        }
    }
    public Boolean userFocus(String userId,String focusUserId,Boolean isFocus){
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            Boolean rs1,rs2,rs3;
            if(isFocus){
                rs1=sqlSession.getMapper(FocusMapper.class).userAddFocusRecord(userId,focusUserId,new Date())==1;
                rs2=sqlSession.getMapper(FocusMapper.class).addFollower(focusUserId)==1;
                rs3=sqlSession.getMapper(FocusMapper.class).addFollowed(userId)==1;
            }else {
                rs1=sqlSession.getMapper(FocusMapper.class).userDeleteFocusRecord(userId,focusUserId)==1;
                rs2=sqlSession.getMapper(FocusMapper.class).subFollower(focusUserId)==1;
                rs3=sqlSession.getMapper(FocusMapper.class).subFollowed(userId)==1;
            }
            if(rs1&&rs2&&rs3){
                sqlSession.commit();
            }
            return rs1&&rs2;
        }
    }
}
