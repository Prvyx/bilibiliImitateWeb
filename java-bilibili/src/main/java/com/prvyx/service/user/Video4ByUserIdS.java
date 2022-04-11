package com.prvyx.service.user;

import com.prvyx.mapper.video.Video4ByUserIdMapper;
import com.prvyx.model.domain.VideoByUserId;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 11:45
 */

public class Video4ByUserIdS {
    public List<VideoByUserId> getVideo4ByUserId(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(Video4ByUserIdMapper.class).getVideo4ByUserId(userId);
        }
    }
}
