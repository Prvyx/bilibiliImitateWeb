package com.prvyx.service;

import com.prvyx.dao.video.Video8BySpaceStarMapper;
import com.prvyx.pojo.Video8BySpaceStar;
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
