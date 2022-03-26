package com.prvyx.dao.video;

import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/26 22:05
 */

public interface InsertVideoMapper {
    int getVideoContribute(@Param("videoId") String videoId, @Param("videoTitle") String videoTitle,
                           @Param("introduce") String introduce,
                           @Param("videoImgPath") String videoImgPath,
                           @Param("videoPath") String videoPath, @Param("isForwardAllowed") Boolean isForwardAllowed,
                           @Param("videoDatetime")Date videoDatetime,
                           @Param("fkUserId") String fkUserId, @Param("fkCategoryId") String fkCategoryId,
                           @Param("fkChannelId") String fkChannelId);
}
