package com.prvyx.dao.user;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 12:15
 */

public interface UserPlayRecordMapper {
    int userPlayRecord(@Param("userId") String userId,@Param("videoId") String videoId,@Param("watchDateTime") Date watchDateTime);
}
