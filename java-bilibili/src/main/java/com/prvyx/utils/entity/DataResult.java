package com.prvyx.utils.entity;

public interface DataResult {
    int getStatus();
    void setStatus(int status);
    String getMsg();
    void setMsg(String msg);
    Object getData();
    void setData(Object data);
}