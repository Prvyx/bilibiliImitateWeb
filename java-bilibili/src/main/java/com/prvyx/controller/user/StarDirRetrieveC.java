package com.prvyx.controller.user;

import com.prvyx.model.other.StarDirRetrieve;
import com.prvyx.service.user.StarDirRetrieveS;
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
public class StarDirRetrieveC {
    @RequestMapping(value = "/starDir.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getStarDir(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        StarDirRetrieve starDirRetrieve=new StarDirRetrieveS().getStarDir(userId);
        dataResult.setStatus(0);
        dataResult.setMsg("success");
        dataResult.setData(starDirRetrieve);

        return SendUtils.sendDataResult(dataResult);
    }
}
