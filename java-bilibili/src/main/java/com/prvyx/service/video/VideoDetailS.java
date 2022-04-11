package com.prvyx.service.video;

import com.prvyx.mapper.video.VideoDetailMapper;
import com.prvyx.mapper.video.VideoSelectionMapper;
import com.prvyx.model.domain.VideoDetail;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

public class VideoDetailS {
    public VideoDetail getVideoDetail(String videoId,String watchUserId){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            VideoDetail videoDetail= sqlSession.getMapper(VideoDetailMapper.class).getVideoDetail(videoId);
            videoDetail.setVideoSelections(sqlSession.getMapper(VideoSelectionMapper.class)
                    .getVideoSelectionListData(videoId));
            videoDetail.setThumbUp(sqlSession.getMapper(VideoDetailMapper.class).checkIsThumbUp(videoId,watchUserId)!=null);
            videoDetail.setCoin(sqlSession.getMapper(VideoDetailMapper.class).checkIsCoin(videoId,watchUserId)!=null);
            return videoDetail;
        }
    }
}
