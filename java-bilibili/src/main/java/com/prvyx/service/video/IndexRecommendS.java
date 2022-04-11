package com.prvyx.service.video;

import com.prvyx.mapper.video.IndexVideoMapper;
import com.prvyx.model.domain.IndexVideo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class IndexRecommendS {
    public List<IndexVideo> getIndexRecommendVideoList(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(IndexVideoMapper.class).getIndexRecommendVideoList(userId);
        }
    }
}
