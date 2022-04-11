package com.prvyx.mapper.user;

import org.apache.ibatis.annotations.Param;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/10 22:57
 */

public interface CreateNewStarDirMapper {
    int createNewStarDir(@Param("starDirId")String starDirId,@Param("starDirCategory")int starDirCategory,
                         @Param("userId")String userId,@Param("starDirTitle")String starDirTitle);
    String checkStarDirId(@Param("starDirId")String starDirId);
    String checkStarDirTitle(@Param("starDirTitle")String starDirTitle);
}
