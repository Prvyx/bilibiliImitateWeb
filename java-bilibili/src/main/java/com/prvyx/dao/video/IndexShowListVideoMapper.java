package com.prvyx.dao.video;

import com.prvyx.pojo.IndexVideo;

import java.util.List;

public interface IndexShowListVideoMapper {
    List<IndexVideo> getIndexShowList(String categoryId);
}
