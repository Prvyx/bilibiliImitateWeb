package com.prvyx.controller.user;

import com.prvyx.model.domain.UserWatchVideoHistory;
import com.prvyx.service.user.UserWatchVideoHistoryS;
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
 * @description:用户观看视频的历史记录
 * @author: Prvyx
 * @created: 2022/04/10 17:16
 */
@Controller
@RequestMapping(value = "/api/user")
public class UserWatchVideoHistoryC {
    @RequestMapping(value = "/watchVideoHistory.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getUserWatchVideoHistory(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<UserWatchVideoHistory> userWatchVideoHistoryList=
                new UserWatchVideoHistoryS().getUserWatchVideoHistory(userId);
        if(userWatchVideoHistoryList!=null&&userWatchVideoHistoryList.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(userWatchVideoHistoryList);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }

        return SendUtils.sendDataResult(dataResult);
    }
}
