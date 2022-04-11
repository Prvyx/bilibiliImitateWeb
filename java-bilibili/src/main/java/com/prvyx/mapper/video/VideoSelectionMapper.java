package com.prvyx.mapper.video;

import com.prvyx.model.domain.VideoSelection;

import java.util.List;

public interface VideoSelectionMapper {
    List<VideoSelection> getVideoSelectionListData(String videoId);
}
