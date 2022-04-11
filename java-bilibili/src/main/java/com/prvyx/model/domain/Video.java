package com.prvyx.model.domain;

public class Video {
    private String video_id;
    private String video_title;
    private String introduce;
    private String video_img_path;
    private String video_path;
    private boolean is_forward_allowed;
    private int video_play_count;
    private int video_barrage_count;
    private int video_thumb_up_number;
    private int video_coin_number;
    private int video_star_number;
    private int video_forward_number;
    private String fk_user_id;
    private String video_datetime;
    private String fk_category_id;
    private String fk_channel_id;

    public Video() {
    }

    public Video(String video_id, String video_title, String video_img_path, String video_path, String fk_user_id, String video_datetime) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.video_img_path = video_img_path;
        this.video_path = video_path;
        this.fk_user_id = fk_user_id;
        this.video_datetime = video_datetime;
    }

    public Video(String video_id, String video_title, String introduce, String video_img_path, String video_path, boolean is_forward_allowed, int video_play_count, int video_barrage_count, int video_thumb_up_number, int video_coin_number, int video_star_number, int video_forward_number, String fk_user_id, String video_datetime, String fk_category_id, String fk_channel_id) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.introduce = introduce;
        this.video_img_path = video_img_path;
        this.video_path = video_path;
        this.is_forward_allowed = is_forward_allowed;
        this.video_play_count = video_play_count;
        this.video_barrage_count = video_barrage_count;
        this.video_thumb_up_number = video_thumb_up_number;
        this.video_coin_number = video_coin_number;
        this.video_star_number = video_star_number;
        this.video_forward_number = video_forward_number;
        this.fk_user_id = fk_user_id;
        this.video_datetime = video_datetime;
        this.fk_category_id = fk_category_id;
        this.fk_channel_id = fk_channel_id;
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

    public String getVideo_path() {
        return video_path;
    }

    public void setVideo_path(String video_path) {
        this.video_path = video_path;
    }

    public boolean isIs_forward_allowed() {
        return is_forward_allowed;
    }

    public void setIs_forward_allowed(boolean is_forward_allowed) {
        this.is_forward_allowed = is_forward_allowed;
    }

    public int getVideo_play_count() {
        return video_play_count;
    }

    public void setVideo_play_count(int video_play_count) {
        this.video_play_count = video_play_count;
    }

    public int getVideo_barrage_count() {
        return video_barrage_count;
    }

    public void setVideo_barrage_count(int video_barrage_count) {
        this.video_barrage_count = video_barrage_count;
    }

    public int getVideo_thumb_up_number() {
        return video_thumb_up_number;
    }

    public void setVideo_thumb_up_number(int video_thumb_up_number) {
        this.video_thumb_up_number = video_thumb_up_number;
    }

    public int getVideo_coin_number() {
        return video_coin_number;
    }

    public void setVideo_coin_number(int video_coin_number) {
        this.video_coin_number = video_coin_number;
    }

    public int getVideo_star_number() {
        return video_star_number;
    }

    public void setVideo_star_number(int video_star_number) {
        this.video_star_number = video_star_number;
    }

    public int getVideo_forward_number() {
        return video_forward_number;
    }

    public void setVideo_forward_number(int video_forward_number) {
        this.video_forward_number = video_forward_number;
    }

    public String getFk_user_id() {
        return fk_user_id;
    }

    public void setFk_user_id(String fk_user_id) {
        this.fk_user_id = fk_user_id;
    }

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
    }

    public String getFk_category_id() {
        return fk_category_id;
    }

    public void setFk_category_id(String fk_category_id) {
        this.fk_category_id = fk_category_id;
    }

    public String getFk_channel_id() {
        return fk_channel_id;
    }

    public void setFk_channel_id(String fk_channel_id) {
        this.fk_channel_id = fk_channel_id;
    }

    @Override
    public String toString() {
        return "Video{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", introduce='" + introduce + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                ", video_path='" + video_path + '\'' +
                ", is_forward_allowed=" + is_forward_allowed +
                ", video_play_count=" + video_play_count +
                ", video_barrage_count=" + video_barrage_count +
                ", video_thumb_up_number=" + video_thumb_up_number +
                ", video_coin_number=" + video_coin_number +
                ", video_star_number=" + video_star_number +
                ", video_forward_number=" + video_forward_number +
                ", fk_user_id='" + fk_user_id + '\'' +
                ", video_datetime='" + video_datetime + '\'' +
                ", fk_category_id='" + fk_category_id + '\'' +
                ", fk_channel_id='" + fk_channel_id + '\'' +
                '}';
    }
}
