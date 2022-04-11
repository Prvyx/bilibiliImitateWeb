package com.prvyx.model.domain;

public class LoginStatus {
    private boolean login_status;
    private String user_id;

    public LoginStatus() {
    }

    public LoginStatus(String user_id) {
        this.user_id = user_id;
        this.login_status=user_id.length()!=0;
    }

    public LoginStatus(boolean login_status, String user_id) {
        this.login_status = login_status;
        this.user_id = user_id;
    }

    public boolean isLogin_status() {
        return login_status;
    }

    public void setLogin_status(boolean login_status) {
        this.login_status = login_status;
    }

    public String getuser_id() {
        return user_id;
    }

    public void setuser_id(String user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "LoginStatus{" +
                "login_status=" + login_status +
                ", user_id='" + user_id + '\'' +
                '}';
    }
}
