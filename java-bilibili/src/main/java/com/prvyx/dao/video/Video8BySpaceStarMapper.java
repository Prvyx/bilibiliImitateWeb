package com.prvyx.dao.video;

import com.prvyx.pojo.Video8BySpaceStar;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 16:27
 */

public interface Video8BySpaceStarMapper {
    List<Video8BySpaceStar> getVideo8BySpaceStar(@Param("userId") String userId, @Param("starDirCategory") int starDirCategory);
}
