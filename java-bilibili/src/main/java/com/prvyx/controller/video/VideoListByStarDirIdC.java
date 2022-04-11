package com.prvyx.controller.video;

import com.prvyx.model.domain.VideoListByStarDirId;
import com.prvyx.service.video.VideoListByStarDirIdS;
import com.prvyx.utils.SendUtils;
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
@RequestMapping(value = "/api/video")
public class VideoListByStarDirIdC {
    @RequestMapping(value = "/videoListByStarDirId.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getIndexRecommendVideoList(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        String starDirId=dataMap.get("starDirId");
        DataResult dataResult=new DataResultImpl();
        List<VideoListByStarDirId> videoList=new VideoListByStarDirIdS().getVideoListByStarDirId(userId,starDirId);

        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(videoList);

        return SendUtils.sendDataResult(dataResult);

    }
}
