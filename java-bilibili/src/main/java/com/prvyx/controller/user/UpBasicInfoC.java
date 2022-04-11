package com.prvyx.controller.user;

import com.prvyx.model.domain.UpBasicInfo;
import com.prvyx.service.user.UpBasicInfoS;
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
public class UpBasicInfoC {
    @RequestMapping(value = "/UpBasicInfo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getCommonLoginUserId(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        UpBasicInfo upBasicInfo=new UpBasicInfoS().getUpBasicInfo(userId);
        if(upBasicInfo.getUser_name().length()==0){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(upBasicInfo);
        }

        return SendUtils.sendDataResult(dataResult);
    }
}
