package com.prvyx.controller.user.contribute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.service.user.contribute.VideoS;
import com.prvyx.utils.SendUtils;
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
    /**
     * @param videoFile: 上传的视频文件
     * @return String
     * @author Tobe
     * @description 处理上传的视频文件
     * @date 2022/5/8 2:58
     */
    @RequestMapping(value = "/uploadVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String uploadVideo(@RequestParam("videoFile")MultipartFile videoFile,@RequestParam("userId")String userId){
        DataResult dataResult=new DataResultImpl();
        if(new VideoS().uploadVideo(videoFile,userId)){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
        }
        return SendUtils.sendDataResult(dataResult);
    }

    @RequestMapping(value = "/contributeVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String contributeVideo(@RequestParam("coverImgFile") MultipartFile coverImgFile,
                                     @RequestParam("title") String title,
                                     @RequestParam("isOriginal") Boolean isOriginal,
                                     @RequestParam("category") String category,
                                     @RequestParam("introduce") String introduce,
                                     @RequestParam("isAllowedToReprint") Boolean isAllowedToReprint,
                                     @RequestParam("userId") String userId,
                                     @RequestParam("ordinal") int ordinal
    ){
        DataResult dataResult=new DataResultImpl();
        if(new VideoS().contributeVideo(coverImgFile,title,isOriginal,category,introduce,isAllowedToReprint,userId,ordinal)){
            dataResult.setStatus(0);
            dataResult.setMsg("video contribute success");
            dataResult.setData(null);
        }else{
            dataResult.setStatus(-1);
            dataResult.setMsg("video contribute fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
}
