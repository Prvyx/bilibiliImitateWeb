package com.prvyx.controller.user.contribute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.service.user.contribute.VideoS;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * @program: java-bilibili
 * @description:视频投稿的控制器
 * @author: Prvyx
 * @created: 2022/03/26 18:39
 */

@Controller
@RequestMapping(value = "/api/user/contribute")
public class VideoC {
    @RequestMapping(value = "/getVideoContribute.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getVideoContribute(@RequestParam("videoContribute") MultipartFile videoFile,
                                     @RequestParam("firstImg") MultipartFile imgFile,
                                     @RequestParam("title") String title,
                                     @RequestParam("introduce") String introduce,
                                     @RequestParam("category") String category,
                                     @RequestParam("forwardPermission") Boolean forwardPermission,
                                     @RequestParam("userId") String userId


    ){
//        System.out.println(videoFile.getOriginalFilename());
//        System.out.println(imgFile);
//        System.out.println(title);
//        System.out.println(introduce);
        DataResult dataResult=new DataResultImpl();
        if(new VideoS().getVideoContribute(videoFile,imgFile,userId,title,introduce,category,forwardPermission)){
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
