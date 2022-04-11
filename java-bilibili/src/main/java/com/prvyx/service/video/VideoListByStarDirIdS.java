package com.prvyx.service.video;

import com.prvyx.mapper.video.VideoListByStarDirIdMapper;
import com.prvyx.model.domain.VideoListByStarDirId;
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
