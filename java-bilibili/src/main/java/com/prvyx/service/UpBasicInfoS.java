package com.prvyx.service;

import com.prvyx.dao.user.UpBasicInfoMapper;
import com.prvyx.pojo.UpBasicInfo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

public class UpBasicInfoS {
    public UpBasicInfo getUpBasicInfo(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(UpBasicInfoMapper.class).getUpBasicInfo(userId);
        }
    }
}
