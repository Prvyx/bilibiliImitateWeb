package com.prvyx.mapper.user;

import org.apache.ibatis.annotations.Param;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/10 02:40
 */

public interface UserFanMapper {
    int addFan(@Param("userId") String userId);
    int subFan(@Param("userId") String userId);
}
