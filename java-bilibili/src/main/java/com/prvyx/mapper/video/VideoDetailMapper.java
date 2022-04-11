package com.prvyx.mapper.video;

import com.prvyx.model.domain.VideoDetail;
import org.apache.ibatis.annotations.Param;

public interface VideoDetailMapper {
    VideoDetail getVideoDetail(String videoId);
    String checkIsThumbUp(@Param("videoId") String videoId, @Param("watchUserId") String watchUserId);
    String checkIsCoin(@Param("videoId") String videoId, @Param("watchUserId") String watchUserId);
}
