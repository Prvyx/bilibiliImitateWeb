package com.prvyx.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.prvyx.pojo.LoginStatus;
import com.prvyx.service.CommonLoginS;
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
public class CommonLoginC {
    @RequestMapping(value = "/api/commonLogin.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getCommonLoginUserId(@RequestBody Map<String,String> dataMap){
        String userName= dataMap.get("userName");
        String userPwd=dataMap.get("userPwd");
        System.out.println("userName:"+userName);
        System.out.println("userPwd:"+userPwd);
        DataResult dataResult=new DataResultImpl();
        LoginStatus loginStatus=new CommonLoginS().getCommonLoginUserId(userName,userPwd);
        if(!loginStatus.isLogin_status()){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(loginStatus);
        }

        System.out.println(loginStatus);
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
