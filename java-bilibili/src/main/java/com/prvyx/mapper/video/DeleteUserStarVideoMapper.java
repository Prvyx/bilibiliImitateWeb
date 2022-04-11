package com.prvyx.mapper.video;

import org.apache.ibatis.annotations.Param;

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
