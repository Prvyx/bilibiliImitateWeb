package com.prvyx.model.domain;

/**
 * @program: java-bilibili
 * @description: 通过userId获得视频信息 的实体类
 * @author: Prvyx
 * @created: 2022/03/25 11:40
 */

public class VideoByUserId {
    private String video_id;
    private String video_title;
    private String video_img_path;
    private String video_play_count;
    private String video_datetime;

    public VideoByUserId() {
    }

    public VideoByUserId(String video_id, String video_title, String video_img_path, String video_play_count, String video_datetime) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.video_img_path = video_img_path;
        this.video_play_count = video_play_count;
        this.video_datetime = video_datetime;
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

    public String getVideo_play_count() {
        return video_play_count;
    }

    public void setVideo_play_count(String video_play_count) {
        this.video_play_count = video_play_count;
    }

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
    }

    @Override
    public String toString() {
        return "Video4ByUserId{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                ", video_play_count='" + video_play_count + '\'' +
                ", video_datetime='" + video_datetime + '\'' +
                '}';
    }
}
