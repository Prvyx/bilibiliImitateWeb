package com.prvyx.dao.user;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 15:42
 */

public interface UserCoinRecordMapper {
    int userAddCoinRecord(@Param("userId") String userId, @Param("videoId") String videoId, @Param("thumbUpDateTime") Date coinDateTime);
}
