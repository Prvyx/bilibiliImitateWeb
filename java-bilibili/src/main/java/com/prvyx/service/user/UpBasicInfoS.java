package com.prvyx.service.user;

import com.prvyx.mapper.user.UpBasicInfoMapper;
import com.prvyx.model.domain.UpBasicInfo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

public class UpBasicInfoS {
    public UpBasicInfo getUpBasicInfo(String userId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(UpBasicInfoMapper.class).getUpBasicInfo(userId);
        }
    }
}
