package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.pojo.StarDirRetrieve;
import com.prvyx.service.StarDirRetrieveS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class StarDirRetrieveC {
    @RequestMapping(value = "/api/starDir.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getStarDir(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
//        System.out.println("userId:"+userId);
        DataResult dataResult=new DataResultImpl();
        StarDirRetrieve starDirRetrieve=new StarDirRetrieveS().getStarDir(userId);
        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(starDirRetrieve);

//        System.out.println(starDirRetrieve);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
