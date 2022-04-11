package com.prvyx.model.domain;


import java.io.Serializable;

/**
 * 置顶视频、代表作
 * @TableName video
 */
public class SpaceVideo implements Serializable {
    /**
     * 
     */
    private String video_id;

    /**
     * 
     */
    private String video_title;

    /**
     * 
     */
    private String introduce;

    /**
     * 
     */
    private String video_img_path;

    /**
     * 
     */
    private String video_datetime;

    /**
     * 
     */
    private Integer video_play_count;

    /**
     *
     */
    private Integer video_barrage_count;

    public SpaceVideo() {
    }

    public SpaceVideo(String video_id, String video_title, String introduce, String video_img_path, String video_datetime, Integer video_play_count, Integer video_barrage_count) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.introduce = introduce;
        this.video_img_path = video_img_path;
        this.video_datetime = video_datetime;
        this.video_play_count = video_play_count;
        this.video_barrage_count = video_barrage_count;
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

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public String getVideo_img_path() {
        return video_img_path;
    }

    public void setVideo_img_path(String video_img_path) {
        this.video_img_path = video_img_path;
    }

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
    }

    public Integer getVideo_play_count() {
        return video_play_count;
    }

    public void setVideo_play_count(Integer video_play_count) {
        this.video_play_count = video_play_count;
    }

    public Integer getVideo_barrage_count() {
        return video_barrage_count;
    }

    public void setVideo_barrage_count(Integer video_barrage_count) {
        this.video_barrage_count = video_barrage_count;
    }

    @Override
    public String toString() {
        return "TopVideo{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", introduce='" + introduce + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                ", video_datetime=" + video_datetime +
                ", video_play_count=" + video_play_count +
                ", video_barrage_count=" + video_barrage_count +
                '}';
    }
}