package com.prvyx.dao.video;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 21:36
 */

public interface DeleteUserStarVideoMapper {
    int deleteUserStarVideo(@Param("userId") String userId, @Param("videoId") String videoId,
                            @Param("starDir") String starDir);
}
