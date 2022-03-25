package com.prvyx.dao.video;

import com.prvyx.pojo.Video4ByUserId;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 11:43
 */

public interface Video4ByUserIdMapper {
    List<Video4ByUserId> getVideo4ByUserId(String userId);
}
