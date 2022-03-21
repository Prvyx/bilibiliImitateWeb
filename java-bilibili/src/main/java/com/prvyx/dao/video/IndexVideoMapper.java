package com.prvyx.dao.video;

import com.prvyx.pojo.IndexVideo;

import java.util.List;

public interface IndexVideoMapper {
    List<IndexVideo> getIndexRecommendVideoList(String userId);
}
