package com.prvyx.service.video;

import com.prvyx.mapper.video.IndexShowListVideoMapper;
import com.prvyx.model.domain.IndexVideo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class IndexShowListS {
    public List<IndexVideo> getIndexShowList(String categoryId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(IndexShowListVideoMapper.class).getIndexShowList(categoryId);
        }
    }
}
