package com.prvyx.dao.video;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 21:31
 */

public interface InsertUserStarVideoMapper {
    int insertUserStarVideo(@Param("userId") String userId, @Param("videoId") String videoId,
                            @Param("starDateTime") Date starDateTime, @Param("starDir") String starDir);
}
