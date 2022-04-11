package com.prvyx.mapper.video;

import com.prvyx.model.domain.VideoByUserId;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 11:43
 */

public interface Video4ByUserIdMapper {
    List<VideoByUserId> getVideo4ByUserId(String userId);
}
