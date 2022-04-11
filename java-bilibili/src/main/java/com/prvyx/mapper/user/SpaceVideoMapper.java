package com.prvyx.mapper.user;


import com.prvyx.model.domain.SpaceVideo;
import com.prvyx.model.domain.VideoByUserId;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
* @author Tobe
* @description 针对表【video(视频表)】的数据库操作Mapper
* @createDate 2022-04-10 11:09:21
* @Entity generator.domain.Video
*/
public interface SpaceVideoMapper {
    SpaceVideo selectTopVideo(@Param("userId") String userId);
    SpaceVideo selectRepresentativeWork(@Param("userId") String userId);
    List<VideoByUserId> selectCoinVideo(@Param("userId") String userId);
    List<VideoByUserId> selectThumbUpVideo(@Param("userId") String userId);
    List<VideoByUserId> selectLatestVideo(@Param("userId") String userId);
    List<VideoByUserId> selectPlayCountDescVideo(@Param("userId")String userId);
    List<VideoByUserId> selectStarNumberDescVideo(@Param("userId")String userId);

}
