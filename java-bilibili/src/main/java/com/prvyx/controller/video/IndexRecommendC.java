package com.prvyx.controller.video;

import com.prvyx.model.domain.IndexVideo;
import com.prvyx.service.video.IndexRecommendS;
import com.prvyx.utils.SendUtils;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/api/video")
public class IndexRecommendC {
    @RequestMapping(value = "/recommendContainer.ajax",method = RequestMethod.POST)
    @ResponseBody
    //https://www.jianshu.com/p/042632dec9fb
    public String getIndexRecommendVideoList(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<IndexVideo> videoList=new IndexRecommendS().getIndexRecommendVideoList(userId);
        if(videoList.isEmpty()){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoList);
        }

        return SendUtils.sendDataResult(dataResult);
    }
}
