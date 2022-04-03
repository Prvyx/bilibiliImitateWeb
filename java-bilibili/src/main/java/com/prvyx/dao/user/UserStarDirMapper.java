package com.prvyx.dao.user;

import com.prvyx.pojo.UserStarDir;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 18:49
 */

public interface UserStarDirMapper {
    List<UserStarDir> getUserStarDirS(String userId);
}
