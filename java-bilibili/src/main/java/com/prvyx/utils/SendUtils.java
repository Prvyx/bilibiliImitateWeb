package com.prvyx.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prvyx.utils.entity.DataResult;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/06 22:51
 */

public class SendUtils {
    /**
     * @param dataResult: 发送给前端的dataResult
     * @return String
     * @author Tobe
     * @description: 发送给前端dataResult的工具类
     * @date 2022/4/6 22:53
     */
    public static String sendDataResult(DataResult dataResult){
        try {
            return new ObjectMapper().writeValueAsString(dataResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
