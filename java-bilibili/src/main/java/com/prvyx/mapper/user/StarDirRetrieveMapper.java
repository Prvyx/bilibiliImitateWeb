package com.prvyx.mapper.user;

import com.prvyx.model.domain.stardircategory.Category;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StarDirRetrieveMapper {
    List<Category> getStarDirData(@Param("userId") String userId, @Param("starDirCategory") String starDirCategory);
}
