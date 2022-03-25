package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.StarDirRetrieve;
import com.prvyx.pojo.Video4ByUserId;
import com.prvyx.service.StarDirRetrieveS;
import com.prvyx.service.Video4ByUserIdS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 11:45
 */

@Controller
public class Video4ByUserIdC {
    @RequestMapping(value = "/api/video4ByUserId.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getVideo4ByUserId(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<Video4ByUserId> video4ByUserIdList=new Video4ByUserIdS().getVideo4ByUserId(userId);
        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(video4ByUserIdList);

        System.out.println(video4ByUserIdList);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
