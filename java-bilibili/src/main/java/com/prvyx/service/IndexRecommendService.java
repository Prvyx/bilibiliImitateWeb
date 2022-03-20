package com.prvyx.service;

import com.prvyx.dao.video.VideoMapper;
import com.prvyx.pojo.Video;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class IndexRecommendService {
    public List<Video> getIndexRecommendVideoList(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(VideoMapper.class).getIndexRecommendVideoList();
        }
    }
}
