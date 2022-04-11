package com.prvyx.mapper.user;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:用户关注其它用户
 * @author: Prvyx
 * @created: 2022/04/10 02:30
 */

public interface UserFocusMapper {
    int userAddFocusRecord(@Param("userId") String userId, @Param("focusUserId") String focusUserId, @Param("focusDateTime") Date focusDateTime);
    int userDeleteFocusRecord(@Param("userId") String userId, @Param("focusUserId") String focusUserId);
}
