package com.prvyx.dao.video;

import com.prvyx.pojo.VideoSelection;

import java.util.List;

public interface VideoSelectionMapper {
    List<VideoSelection> getVideoSelectionListData(String videoId);
}
