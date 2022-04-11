package com.prvyx.mapper.user;

import com.prvyx.model.domain.LoginStatus;
import org.apache.ibatis.annotations.Param;

public interface CommonLoginMapper {
    //Mybatis传递多个参数 可以通过添加Mybatis包里的一个注解解决
    String getCommonLoginUserId(@Param("userName") String userName,@Param("userPwd") String userPwd);
}
