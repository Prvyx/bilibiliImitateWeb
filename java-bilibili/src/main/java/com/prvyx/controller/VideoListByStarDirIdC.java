package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.IndexVideo;
import com.prvyx.pojo.VideoListByStarDirId;
import com.prvyx.service.IndexRecommendService;
import com.prvyx.service.VideoListByStarDirIdS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class VideoListByStarDirIdC {
    @RequestMapping(value = "/api/videoListByStarDirId.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getIndexRecommendVideoList(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        String starDirId=dataMap.get("starDirId");
//        System.out.println(userId);
//        System.out.println(starDirId);
        DataResult dataResult=new DataResultImpl();
        List<VideoListByStarDirId> videoList=new VideoListByStarDirIdS().getVideoListByStarDirId(userId,starDirId);

        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(videoList);

//        System.out.println(videoList);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
