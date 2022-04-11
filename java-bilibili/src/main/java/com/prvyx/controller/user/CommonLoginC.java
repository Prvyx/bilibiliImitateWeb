package com.prvyx.controller.user;

import com.prvyx.model.domain.LoginStatus;
import com.prvyx.service.user.CommonLoginS;
import com.prvyx.utils.SendUtils;
import com.prvyx.utils.entity.DataResult;
import com.prvyx.utils.entity.DataResultImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping(value = "/api/user")
public class CommonLoginC {
    @RequestMapping(value = "/commonLogin.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getCommonLoginUserId(@RequestBody Map<String,String> dataMap){
        String userName= dataMap.get("userName");
        String userPwd=dataMap.get("userPwd");
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

        return SendUtils.sendDataResult(dataResult);
    }
}
