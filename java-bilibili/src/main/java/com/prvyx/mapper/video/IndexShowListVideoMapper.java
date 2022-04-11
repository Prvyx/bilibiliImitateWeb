package com.prvyx.mapper.video;

import com.prvyx.model.domain.IndexVideo;

import java.util.List;

public interface IndexShowListVideoMapper {
    List<IndexVideo> getIndexShowList(String categoryId);
}
