package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.VideoDetail;
import com.prvyx.service.VideoDetailS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class VideoDetailC {
    @RequestMapping(value = "/api/videoDetail.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getVideoSelectionList(@RequestBody Map<String,String> dataMap){
        String videoId= dataMap.get("videoId");
//        System.out.println(videoId);
        DataResult dataResult=new DataResultImpl();
        VideoDetail videoDetail=new VideoDetailS().getVideoDetail(videoId);
        if(videoDetail.getVideo_id().length()==0){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoDetail);
        }

//        System.out.println(videoDetail);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
