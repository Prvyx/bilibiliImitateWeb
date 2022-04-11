package com.prvyx.model.domain;

import java.util.Date;

/**
 * @program: java-bilibili
 * @description: 用户观看视频历史记录的domain
 * @author: Prvyx
 * @created: 2022/04/10 17:19
 */

public class UserWatchVideoHistory {
    private String video_id;
    private String video_title;
    private String video_img_path;
    private String user_name;
    private String watch_datetime;

    public UserWatchVideoHistory() {
    }

    public UserWatchVideoHistory(String video_id, String video_title, String video_img_path, String user_name, String watch_datetime) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.video_img_path = video_img_path;
        this.user_name = user_name;
        this.watch_datetime = watch_datetime;
    }

    public String getVideo_id() {
        return video_id;
    }

    public void setVideo_id(String video_id) {
        this.video_id = video_id;
    }

    public String getVideo_title() {
        return video_title;
    }

    public void setVideo_title(String video_title) {
        this.video_title = video_title;
    }

    public String getVideo_img_path() {
        return video_img_path;
    }

    public void setVideo_img_path(String video_img_path) {
        this.video_img_path = video_img_path;
    }

    public String getWatch_datetime() {
        return watch_datetime;
    }

    public void setWatch_datetime(String watch_datetime) {
        this.watch_datetime = watch_datetime;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
}
