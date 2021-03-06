package com.prvyx.controller.user;

import com.prvyx.model.domain.Video8BySpaceStar;
import com.prvyx.service.user.Video8BySpaceStarS;
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

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/25 16:27
 */
@Controller
@RequestMapping(value = "/api/user")
public class Video8BySpaceStarC {
    @RequestMapping(value = "/video8BySpaceStar.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getIndexShowList(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");

        DataResult dataResult=new DataResultImpl();
        List<Video8BySpaceStar> videoList=new Video8BySpaceStarS().getVideo8BySpaceStar(userId);
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
