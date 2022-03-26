package com.prvyx.controller.contribute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.service.contribute.VideoS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

/**
 * @program: java-bilibili
 * @description:视频投稿的控制器
 * @author: Prvyx
 * @created: 2022/03/26 18:39
 */

@Controller
public class VideoC {
    @RequestMapping(value = "/api/getVideoContribute.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getVideoContribute(@RequestParam("video") MultipartFile videoFile)throws Exception{
//        System.out.println(videoFile.getOriginalFilename());

        DataResult dataResult=new DataResultImpl();
        if(new VideoS().getVideoContribute(videoFile)){
            dataResult.setStatus(0);
            dataResult.setMsg("video insert success");
            dataResult.setData(null);
        }else{
            dataResult.setStatus(-1);
            dataResult.setMsg("video insert fail");
            dataResult.setData(null);
        }
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
