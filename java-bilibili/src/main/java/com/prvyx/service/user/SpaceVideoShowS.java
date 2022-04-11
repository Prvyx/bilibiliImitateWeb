package com.prvyx.service.user;

import com.prvyx.mapper.user.SpaceVideoMapper;
import com.prvyx.model.domain.SpaceVideo;
import com.prvyx.model.domain.VideoByUserId;
import com.prvyx.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * @program: java-bilibili
 * @description:个人主页的“置顶视频”与“代表作”的服务层
 * @author: Prvyx
 * @created: 2022/04/10 11:06
 */

public class SpaceVideoShowS {
    public SpaceVideo getTopVideo(String userId){
        try (SqlSession sqlSession= MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectTopVideo(userId);
        }
    }
    public SpaceVideo getRepresentativeWork(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectRepresentativeWork(userId);
        }
    }
    public List<VideoByUserId> getCoinVideos(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectCoinVideo(userId);
        }
    }
    public List<VideoByUserId> getThumbUpVideos(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectThumbUpVideo(userId);
        }
    }
    public List<VideoByUserId> getLatestVideos(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectLatestVideo(userId);
        }
    }
    public List<VideoByUserId> selectPlayCountDescVideo(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectPlayCountDescVideo(userId);
        }
    }
    public List<VideoByUserId> selectStarNumberDescVideo(String userId){
        try (SqlSession sqlSession=MybatisUtils.getSqlSession()){
            return sqlSession.getMapper(SpaceVideoMapper.class).selectStarNumberDescVideo(userId);
        }
    }
}
