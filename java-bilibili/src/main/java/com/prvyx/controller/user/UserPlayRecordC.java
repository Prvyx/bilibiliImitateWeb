package com.prvyx.controller.user;

import com.prvyx.service.user.UserPlayRecordS;
import com.prvyx.utils.SendUtils;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 12:14
 */

@Controller
@RequestMapping(value = "/api/user")
public class UserPlayRecordC {
    @RequestMapping(value = "/userPlayRecord.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String userPlayRecordC(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        String videoId=dataMap.get("videoId");
        DataResult dataResult=new DataResultImpl();
        if(new UserPlayRecordS().userPlayRecordC(userId, videoId)){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }

        return SendUtils.sendDataResult(dataResult);
    }
}
