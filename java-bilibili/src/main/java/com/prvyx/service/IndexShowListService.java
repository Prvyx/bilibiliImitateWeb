package com.prvyx.service;

import com.prvyx.dao.video.IndexShowListVideoMapper;
import com.prvyx.pojo.IndexVideo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class IndexShowListService {
    public List<IndexVideo> getIndexShowList(String categoryId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(IndexShowListVideoMapper.class).getIndexShowList(categoryId);
        }
    }
}
