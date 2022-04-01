package com.prvyx.service;

import com.prvyx.dao.video.CheckVidMapper;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/01 18:55
 */

public class CheckVidS {
    public Boolean checkVid(String vid){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(CheckVidMapper.class).checkVid(vid)==null;
        }
    }
}
