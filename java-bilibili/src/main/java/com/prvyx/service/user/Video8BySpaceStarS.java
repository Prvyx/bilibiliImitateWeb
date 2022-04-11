package com.prvyx.service.user;

import com.prvyx.mapper.video.Video8BySpaceStarMapper;
import com.prvyx.model.domain.Video8BySpaceStar;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 16:27
 */

public class Video8BySpaceStarS {
    public List<Video8BySpaceStar> getVideo8BySpaceStar(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(Video8BySpaceStarMapper.class).getVideo8BySpaceStar(userId,1);
        }
    }
}
