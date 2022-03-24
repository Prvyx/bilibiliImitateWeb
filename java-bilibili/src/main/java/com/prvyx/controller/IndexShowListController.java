package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.IndexVideo;
import com.prvyx.service.IndexShowListService;
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
public class IndexShowListController {
    @RequestMapping(value = "/api/indexShowList.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getIndexShowList(@RequestBody Map<String,String> dataMap){
        String categoryId= dataMap.get("categoryId");
//        System.out.println(categoryId);
        DataResult dataResult=new DataResultImpl();
        List<IndexVideo> videoList=new IndexShowListService().getIndexShowList(categoryId);
        if(videoList.isEmpty()){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoList);
        }

        System.out.println(videoList);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
