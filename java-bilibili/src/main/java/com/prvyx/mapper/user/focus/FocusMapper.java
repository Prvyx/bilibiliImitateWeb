package com.prvyx.mapper.user.focus;

import com.prvyx.model.domain.focus.FollowerOrFocus;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/05/07 02:03
 */

public interface FocusMapper {
    String isFocus(@Param("userId") String userId, @Param("otherId") String otherId);
    List<FollowerOrFocus> whoFocusMe(String userId);
    List<FollowerOrFocus> iFocusWho(String userId);
    int userAddFocusRecord(@Param("userId") String userId, @Param("focusUserId") String focusUserId, @Param("focusDateTime") Date focusDateTime);
    int userDeleteFocusRecord(@Param("userId") String userId, @Param("focusUserId") String focusUserId);
    int addFollower(@Param("userId") String userId);
    int subFollower(@Param("userId") String userId);
    int addFollowed(String userId);
    int subFollowed(String userId);
}
