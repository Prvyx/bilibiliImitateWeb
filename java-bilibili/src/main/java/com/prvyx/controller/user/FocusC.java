package com.prvyx.controller.user;

import com.prvyx.model.domain.focus.FollowerOrFocus;
import com.prvyx.service.user.focus.FocusS;
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
 * @description:  “关注” 的控制器
 * @author: Prvyx
 * @created: 2022/05/07 01:59
 */

@Controller
@RequestMapping(value = "/api/user/focus",method = RequestMethod.POST)
public class FocusC {
    /**
     * @param dataMap:
     * @return String
     * @author Tobe
     * @description 查看是否关注
     * @date 2022/5/7 2:22
     */
    @RequestMapping(value = "/isFocus.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String isFocus(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        String otherUserId=dataMap.get("otherUserId");
        DataResult dataResult=new DataResultImpl();
        boolean isFocus=new FocusS().isFocus(userId,otherUserId);
        if(!isFocus){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
        }

        return SendUtils.sendDataResult(dataResult);
    }
    /**
     * @param dataMap:
     * @return String
     * @author Tobe
     * @description 用户查看谁关注自己
     * @date 2022/5/7 2:23
     */
    @RequestMapping(value = "/whoFocusMe.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String whoFocusMe(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<FollowerOrFocus> followerOrFocusList=new FocusS().whoFocusMe(userId);
        if(followerOrFocusList.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(followerOrFocusList);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }

        return SendUtils.sendDataResult(dataResult);
    }

    /**
     * @param dataMap:
     * @return String
     * @author Tobe
     * @description 我关注了谁
     * @date 2022/5/7 2:28
     */
    @RequestMapping(value = "/iFocusWho.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String iFocusWho(@RequestBody Map<String,String> dataMap){
        String userId= dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<FollowerOrFocus> followerOrFocusList=new FocusS().iFocusWho(userId);
        if(followerOrFocusList.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(followerOrFocusList);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }

        return SendUtils.sendDataResult(dataResult);
    }

    /**
     * @param dataMap:
     * @return String
     * @author Tobe
     * @description 用户关注/取关其它用户
     * @date 2022/5/7 2:41
     */
    @RequestMapping(value = "/userFocus.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String userFocus(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        String focusUserId=dataMap.get("focusUserId");
        Boolean isFocus=dataMap.get("isFocus").equals("true");

        DataResult dataResult=new DataResultImpl();

        if(new FocusS().userFocus(userId,focusUserId,isFocus)){
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
