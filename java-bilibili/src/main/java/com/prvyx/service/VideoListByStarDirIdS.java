package com.prvyx.service;

import com.prvyx.dao.video.VideoListByStarDirIdMapper;
import com.prvyx.pojo.VideoListByStarDirId;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class VideoListByStarDirIdS {
    public List<VideoListByStarDirId> getVideoListByStarDirId(String userId,String starDirId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(VideoListByStarDirIdMapper.class).getVideoListByStarDirId(userId,starDirId);
        }
    }
}
