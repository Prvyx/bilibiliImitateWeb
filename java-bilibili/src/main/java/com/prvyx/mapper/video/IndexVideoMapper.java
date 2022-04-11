package com.prvyx.mapper.video;

import com.prvyx.model.domain.IndexVideo;

import java.util.List;

public interface IndexVideoMapper {
    List<IndexVideo> getIndexRecommendVideoList(String userId);
}
