package com.prvyx.mapper.video;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 13:05
 */

public interface VideoThumbUpMapper {
    int addVideoThumbUp(String videoId);
    int subVideoThumbUp(String videoId);
}
