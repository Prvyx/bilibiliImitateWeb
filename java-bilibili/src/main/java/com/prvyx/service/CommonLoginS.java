package com.prvyx.service;

import com.prvyx.dao.user.CommonLoginMapper;
import com.prvyx.pojo.LoginStatus;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

public class CommonLoginS {
    public LoginStatus getCommonLoginUserId(String userName, String userPwd){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            LoginStatus loginStatus=sqlSession.getMapper(CommonLoginMapper.class).getCommonLoginUserId(userName,userPwd);
            loginStatus.setLogin_status(loginStatus.getuser_id().length()!=0);
            return loginStatus;
        }
    }
}
