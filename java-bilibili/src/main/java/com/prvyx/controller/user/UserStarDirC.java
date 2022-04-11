package com.prvyx.controller.user;

import com.prvyx.model.other.NewStarDir;
import com.prvyx.model.postpojo.NewUserStarDir;
import com.prvyx.model.domain.UserStarDir;
import com.prvyx.service.user.UserStarDirS;
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
 * @created: 2022/04/02 18:55
 */
@Controller
@RequestMapping(value = "/api/user")
public class UserStarDirC {
    @RequestMapping(value = "/userStarDir.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String userStarDirs(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        String videoId=dataMap.get("videoId");
        System.out.println(videoId);
        DataResult dataResult=new DataResultImpl();
        List<UserStarDir> userStarDirs=new UserStarDirS().getUserStarDirs(userId,videoId);
        if(userStarDirs.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(userStarDirs);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }

        return SendUtils.sendDataResult(dataResult);
    }

    @RequestMapping(value = "/newUserStarDir.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String newUserStarDirs(@RequestBody NewUserStarDir newUserStarDir){
        String userId=newUserStarDir.getUserId();
        String videoId=newUserStarDir.getVideoId();
        List<NewStarDir> newStarDirs=newUserStarDir.getNewStarDirs();

        DataResult dataResult=new DataResultImpl();
        if(new UserStarDirS().newUserStarDirs(userId,videoId,newStarDirs)){
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
