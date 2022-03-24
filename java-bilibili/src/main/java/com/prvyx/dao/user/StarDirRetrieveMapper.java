package com.prvyx.dao.user;

import com.prvyx.pojo.stardircategory.Category;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StarDirRetrieveMapper {
    List<Category> getStarDirData(@Param("userId") String userId, @Param("starDirCategory") String starDirCategory);
}
