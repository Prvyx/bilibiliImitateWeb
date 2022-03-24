package com.prvyx.pojo;

/**
 * 通过StarDirId获取相应的视频列表 的 实体类
 */
public class VideoListByStarDirId {
    private String video_id;
    private String video_title;
    private String video_img_path;
    private String star_datetime;
    private int video_play_count;
    private int video_star_number;
    private String user_name;
    private String video_datetime;

    public VideoListByStarDirId() {
    }

    public VideoListByStarDirId(String video_id, String video_title, String video_img_path, String star_datetime, int video_play_count, int video_star_number, String user_name, String video_datetime) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.video_img_path = video_img_path;
        this.star_datetime = star_datetime;
        this.video_play_count = video_play_count;
        this.video_star_number = video_star_number;
        this.user_name = user_name;
        this.video_datetime = video_datetime;
    }

    public String getvideo_id() {
        return video_id;
    }

    public void setvideo_id(String video_id) {
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

    public String getStar_datetime() {
        return star_datetime;
    }

    public void setStar_datetime(String star_datetime) {
        this.star_datetime = star_datetime;
    }

    public int getVideo_play_count() {
        return video_play_count;
    }

    public void setVideo_play_count(int video_play_count) {
        this.video_play_count = video_play_count;
    }

    public int getVideo_star_number() {
        return video_star_number;
    }

    public void setVideo_star_number(int video_star_number) {
        this.video_star_number = video_star_number;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
    }

    @Override
    public String toString() {
        return "VideoListByStarDirId{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                ", star_datetime='" + star_datetime + '\'' +
                ", video_play_count=" + video_play_count +
                ", video_star_number=" + video_star_number +
                ", user_name='" + user_name + '\'' +
                ", video_datetime='" + video_datetime + '\'' +
                '}';
    }
}
