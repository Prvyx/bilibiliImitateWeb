package com.prvyx.dao.user;

import com.prvyx.pojo.User;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.List;

public class UserTest {
    @Test
    public void test(){
        try(SqlSession sqlSession=MybatisUtils.getSqlSession()){
            UserMapper userMapper=sqlSession.getMapper(UserMapper.class);
            List<User> userList=userMapper.getUserList();
            for(User user:userList){
                System.out.println(user);
            }
        }
    }
}
