package com.prvyx.service;

import com.prvyx.dao.video.IndexVideoMapper;
import com.prvyx.pojo.IndexVideo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class IndexRecommendService {
    public List<IndexVideo> getIndexRecommendVideoList(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(IndexVideoMapper.class).getIndexRecommendVideoList(userId);
        }
    }
}
