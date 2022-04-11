package com.prvyx.mapper.user;

import com.prvyx.model.domain.UserWatchVideoHistory;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/10 17:25
 */

public interface UserWatchVideoHistoryMapper {
    List<UserWatchVideoHistory> getUserWatchVideoHistory(@Param("userId")String userId);
}
