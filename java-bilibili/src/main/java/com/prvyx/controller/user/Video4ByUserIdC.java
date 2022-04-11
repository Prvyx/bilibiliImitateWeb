package com.prvyx.controller.user;

import com.prvyx.model.domain.VideoByUserId;
import com.prvyx.service.user.Video4ByUserIdS;
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
 * @created: 2022/03/25 11:45
 */

@Controller
@RequestMapping(value = "/api/user")
public class Video4ByUserIdC {
    @RequestMapping(value = "/video4ByUserId.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getVideo4ByUserId(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIdList =new Video4ByUserIdS().getVideo4ByUserId(userId);
        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(videoByUserIdList);

        return SendUtils.sendDataResult(dataResult);
    }
}
