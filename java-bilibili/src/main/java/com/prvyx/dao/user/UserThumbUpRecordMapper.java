package com.prvyx.dao.user;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 13:00
 */

public interface UserThumbUpRecordMapper {
    int userAddThumbUpRecord(@Param("userId") String userId, @Param("videoId") String videoId, @Param("thumbUpDateTime")Date thumbUpDateTime);
    int userDeleteThumbUpRecord(@Param("userId") String userId, @Param("videoId") String videoId);
}
