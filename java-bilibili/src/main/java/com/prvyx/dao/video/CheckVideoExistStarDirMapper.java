package com.prvyx.dao.video;

import org.apache.ibatis.annotations.Param;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 19:28
 */

public interface CheckVideoExistStarDirMapper {
    String checkVideoExistStarDir(@Param("userId") String userId,
                                  @Param("videoId")String videoId,
                                  @Param("starDirId")String starDirId);
}
