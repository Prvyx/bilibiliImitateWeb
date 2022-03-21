package com.prvyx.dao.video;

import com.prvyx.pojo.IndexVideo;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.List;

public class VideoTest {
    @Test
    public void test(){
        try(SqlSession sqlSession=MybatisUtils.getSqlSession()){
            List<IndexVideo> videoList=sqlSession.getMapper(IndexVideoMapper.class).getIndexRecommendVideoList("1");
            for(IndexVideo indexVideo:videoList){
                System.out.println(indexVideo);
            }
        }
    }
}
