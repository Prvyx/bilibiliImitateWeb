package com.prvyx.service;

import com.prvyx.dao.user.StarDirRetrieveMapper;
import com.prvyx.pojo.StarDirRetrieve;
import com.prvyx.pojo.stardircategory.Category;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class StarDirRetrieveS {
    public StarDirRetrieve getStarDir(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            List<Category> category1=
                    sqlSession.getMapper(StarDirRetrieveMapper.class).getStarDirData(userId,"1");
            List<Category> category2=
                    sqlSession.getMapper(StarDirRetrieveMapper.class).getStarDirData(userId,"2");
            List<Category> category3=
                    sqlSession.getMapper(StarDirRetrieveMapper.class).getStarDirData(userId,"3");
            return new StarDirRetrieve(category1,category2,category3);
        }
    }
}
