package com.prvyx.service.user;

import com.prvyx.mapper.user.UserWatchVideoHistoryMapper;
import com.prvyx.model.domain.UserWatchVideoHistory;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/10 17:24
 */

public class UserWatchVideoHistoryS {
    public List<UserWatchVideoHistory> getUserWatchVideoHistory(String userId){
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(UserWatchVideoHistoryMapper.class).
                    getUserWatchVideoHistory(userId);
        }
    }
}
