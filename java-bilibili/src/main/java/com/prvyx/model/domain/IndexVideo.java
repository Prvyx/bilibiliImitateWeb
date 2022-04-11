package com.prvyx.model.domain;

public class IndexVideo {
    private String video_id;
    private String video_title;
    private String video_img_path;
    private int video_play_count;
    private int video_thumb_up_number;
    private String video_datetime;
    private String user_name;

    public IndexVideo() {
    }

    public IndexVideo(String video_id, String video_title, String video_img_path, int video_play_count, int video_thumb_up_number, String video_datetime, String user_name) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.video_img_path = video_img_path;
        this.video_play_count = video_play_count;
        this.video_thumb_up_number = video_thumb_up_number;
        this.video_datetime = video_datetime;
        this.user_name = user_name;
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

    public int getVideo_play_count() {
        return video_play_count;
    }

    public void setVideo_play_count(int video_play_count) {
        this.video_play_count = video_play_count;
    }

    public int getVideo_thumb_up_number() {
        return video_thumb_up_number;
    }

    public void setVideo_thumb_up_number(int video_thumb_up_number) {
        this.video_thumb_up_number = video_thumb_up_number;
    }

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    @Override
    public String toString() {
        return "IndexVideo{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                ", video_play_count=" + video_play_count +
                ", video_thumb_up_number=" + video_thumb_up_number +
                ", video_datetime='" + video_datetime + '\'' +
                ", user_name='" + user_name + '\'' +
                '}';
    }
}
