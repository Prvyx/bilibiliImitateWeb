package com.prvyx.controller.user;

import com.prvyx.model.domain.SpaceVideo;
import com.prvyx.model.domain.VideoByUserId;
import com.prvyx.service.user.SpaceVideoShowS;
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
 * @description:个人主页的视频列表的控制层
 * @author: Prvyx
 * @created: 2022/04/10 11:03
 */
@Controller
@RequestMapping(value = "/api/user")
public class SpaceVideoShowC {
//    “置顶视频”
    @RequestMapping(value = "/topVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getTopVideo(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        SpaceVideo topVideo=new SpaceVideoShowS().getTopVideo(userId);
        if(topVideo!=null&&topVideo.getVideo_id()!=null){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(topVideo);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
//    “代表作”
    @RequestMapping(value = "/representativeWork.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getRepresentativeWork(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        SpaceVideo representativeWork=new SpaceVideoShowS().getRepresentativeWork(userId);
        if(representativeWork!=null&&representativeWork.getVideo_id()!=null){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(representativeWork);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
    // 最近投币的视频
    @RequestMapping(value = "/coinVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getCoinVideos(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIds=new SpaceVideoShowS().getCoinVideos(userId);
        if(videoByUserIds!=null&&videoByUserIds.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoByUserIds);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
    // 最近点赞的视频
    @RequestMapping(value = "/thumbUpVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getThumbUpVideos(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIds=new SpaceVideoShowS().getThumbUpVideos(userId);
        if(videoByUserIds!=null&&videoByUserIds.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoByUserIds);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
    // 最新发布的视频列表
    @RequestMapping(value = "/latestVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getLatestVideos(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIds=new SpaceVideoShowS().getLatestVideos(userId);
        if(videoByUserIds!=null&&videoByUserIds.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoByUserIds);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
    // 最多播放的视频列表
    @RequestMapping(value = "/mostPlayCountVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String selectPlayCountDescVideo(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIds=new SpaceVideoShowS().selectPlayCountDescVideo(userId);
        if(videoByUserIds!=null&&videoByUserIds.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoByUserIds);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
    // 最多收藏的视频列表
    @RequestMapping(value = "/mostStarVideo.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String selectStarNumberDescVideo(@RequestBody Map<String,String> dataMap){
        String userId=dataMap.get("userId");
        DataResult dataResult=new DataResultImpl();
        List<VideoByUserId> videoByUserIds=new SpaceVideoShowS().selectStarNumberDescVideo(userId);
        if(videoByUserIds!=null&&videoByUserIds.size()!=0){
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoByUserIds);
        }else {
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }
        return SendUtils.sendDataResult(dataResult);
    }
}
