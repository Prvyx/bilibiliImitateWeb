package com.prvyx.dao.user;

import com.prvyx.pojo.LoginStatus;
import org.apache.ibatis.annotations.Param;

public interface CommonLoginMapper {
    //Mybatis传递多个参数 可以通过添加Mybatis包里的一个注解解决
    LoginStatus getCommonLoginUserId(@Param("userName") String userName,@Param("userPwd") String userPwd);
}
