package com.prvyx.mapper.video;

import com.prvyx.model.domain.VideoListByStarDirId;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface VideoListByStarDirIdMapper {
    List<VideoListByStarDirId> getVideoListByStarDirId(@Param("userId") String userId,@Param("starDirId") String starDirId);
}
