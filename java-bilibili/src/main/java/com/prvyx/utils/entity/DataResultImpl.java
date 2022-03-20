package com.prvyx.utils.entity;

public class DataResultImpl implements DataResult{
    private int status;
    private String msg;
    private Object data;

    public DataResultImpl() {
    }

    public DataResultImpl(int status, String msg, Object data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    @Override
    public int getStatus() {
        return status;
    }

    @Override
    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String getMsg() {
        return msg;
    }

    @Override
    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public Object getData() {
        return data;
    }

    @Override
    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "DataResultImpl{" +
                "status=" + status +
                ", msg='" + msg + '\'' +
                ", data=" + data +
                '}';
    }
}
