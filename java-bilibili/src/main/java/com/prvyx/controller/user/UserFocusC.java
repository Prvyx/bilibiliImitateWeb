package com.prvyx.controller.user;

import com.prvyx.service.user.UserFocusS;
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
 * @description: 用户关注其它用户
 * @author: Prvyx
 * @created: 2022/04/10 02:20
 */
@Controller
@RequestMapping(value = "/api/user")
public class UserFocusC {
    @RequestMapping(value = "/userFocus.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String userFocus(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        String focusUserId=dataMap.get("focusUserId");
        Boolean isFocus=dataMap.get("isFocus").equals("true");

        DataResult dataResult=new DataResultImpl();

        if(new UserFocusS().userFocus(userId,focusUserId,isFocus)){
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
