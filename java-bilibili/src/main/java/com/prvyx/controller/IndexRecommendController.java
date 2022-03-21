package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.IndexVideo;
import com.prvyx.service.IndexRecommendService;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
public class IndexRecommendController {
    @RequestMapping(value = "/api/recommendContainer.ajax",method = RequestMethod.POST)
    @ResponseBody
    //https://www.jianshu.com/p/042632dec9fb
    public String getIndexRecommendVideoList(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
//        System.out.println(userId);
        DataResult dataResult=new DataResultImpl();
        List<IndexVideo> videoList=new IndexRecommendService().getIndexRecommendVideoList(userId);
        if(videoList.isEmpty()){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoList);
        }

//        System.out.println(videoList);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}