package com.prvyx.dao.video;

import com.prvyx.pojo.Video;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.List;

public class VideoTest {
    @Test
    public void test(){
        try(SqlSession sqlSession=MybatisUtils.getSqlSession()){
            List<Video> videoList=sqlSession.getMapper(VideoMapper.class).getIndexRecommendVideoList();
            for(Video video:videoList){
                System.out.println(video);
            }
        }
    }
}
