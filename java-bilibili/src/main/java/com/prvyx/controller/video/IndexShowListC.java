package com.prvyx.controller.video;

import com.prvyx.model.domain.IndexVideo;
import com.prvyx.service.video.IndexShowListS;
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

@Controller
@RequestMapping(value = "/api/video")
public class IndexShowListC {
    @RequestMapping(value = "/indexShowList.ajax",method = RequestMethod.POST)
    @ResponseBody
    public String getIndexShowList(@RequestBody Map<String,String> dataMap){
        String categoryId= dataMap.get("categoryId");
        DataResult dataResult=new DataResultImpl();
        List<IndexVideo> videoList=new IndexShowListS().getIndexShowList(categoryId);
        if(videoList.isEmpty()){
            dataResult.setStatus(-1);
            dataResult.setMsg("fail");
            dataResult.setData(null);
        }else {
            dataResult.setStatus(0);
            dataResult.setMsg("success");
            dataResult.setData(videoList);
        }

        return SendUtils.sendDataResult(dataResult);

    }
}
