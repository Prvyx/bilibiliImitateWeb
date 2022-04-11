package com.prvyx.service.user;

import com.prvyx.mapper.user.CommonLoginMapper;
import com.prvyx.model.domain.LoginStatus;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

public class CommonLoginS {
    public LoginStatus getCommonLoginUserId(String userName, String userPwd){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            LoginStatus loginStatus=new LoginStatus();
            String userId=sqlSession.getMapper(CommonLoginMapper.class).getCommonLoginUserId(userName,userPwd);
            if(userId==null){
                loginStatus.setuser_id(null);
                loginStatus.setLogin_status(false);
            }else {
                loginStatus.setuser_id(userId);
                loginStatus.setLogin_status(true);
            }

            return loginStatus;
        }
    }
}
