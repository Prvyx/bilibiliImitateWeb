package com.prvyx.model.domain;

import java.util.List;

public class VideoDetail {
    private String video_id;
    private String video_title;
    private String introduce;
    private String video_path;
    private boolean is_forward_allowed;
    private String video_datetime;
    private int video_play_count;
    private int video_barrage_count;
    private int video_thumb_up_number;
    private int video_coin_number;
    private int video_star_number;
    private int video_forward_number;
    private String user_name;
    private String user_avatar_path;
    private List<VideoSelection> videoSelections;
    private Boolean isThumbUp;
    private Boolean isCoin;

    public VideoDetail() {
    }

    public VideoDetail(String video_id, String video_title, String introduce, String video_path, boolean is_forward_allowed, String video_datetime, int video_play_count, int video_barrage_count, int video_thumb_up_number, int video_coin_number, int video_star_number, int video_forward_number, String user_name, String user_avatar_path, List<VideoSelection> videoSelections, Boolean isThumbUp, Boolean isCoin) {
        this.video_id = video_id;
        this.video_title = video_title;
        this.introduce = introduce;
        this.video_path = video_path;
        this.is_forward_allowed = is_forward_allowed;
        this.video_datetime = video_datetime;
        this.video_play_count = video_play_count;
        this.video_barrage_count = video_barrage_count;
        this.video_thumb_up_number = video_thumb_up_number;
        this.video_coin_number = video_coin_number;
        this.video_star_number = video_star_number;
        this.video_forward_number = video_forward_number;
        this.user_name = user_name;
        this.user_avatar_path = user_avatar_path;
        this.videoSelections = videoSelections;
        this.isThumbUp = isThumbUp;
        this.isCoin = isCoin;
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

    public String getVideo_path() {
        return video_path;
    }

    public String getUser_avatar_path() {
        return user_avatar_path;
    }

    public void setUser_avatar_path(String user_avatar_path) {
        this.user_avatar_path = user_avatar_path;
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

    public String getVideo_datetime() {
        return video_datetime;
    }

    public void setVideo_datetime(String video_datetime) {
        this.video_datetime = video_datetime;
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

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public List<VideoSelection> getVideoSelections() {
        return videoSelections;
    }

    public void setVideoSelections(List<VideoSelection> videoSelections) {
        this.videoSelections = videoSelections;
    }

    public Boolean getThumbUp() {
        return isThumbUp;
    }

    public void setThumbUp(Boolean thumbUp) {
        isThumbUp = thumbUp;
    }

    public Boolean getCoin() {
        return isCoin;
    }

    public void setCoin(Boolean coin) {
        isCoin = coin;
    }

    @Override
    public String toString() {
        return "VideoDetail{" +
                "video_id='" + video_id + '\'' +
                ", video_title='" + video_title + '\'' +
                ", introduce='" + introduce + '\'' +
                ", video_path='" + video_path + '\'' +
                ", is_forward_allowed=" + is_forward_allowed +
                ", video_datetime='" + video_datetime + '\'' +
                ", video_play_count=" + video_play_count +
                ", video_barrage_count=" + video_barrage_count +
                ", video_thumb_up_number=" + video_thumb_up_number +
                ", video_coin_number=" + video_coin_number +
                ", video_star_number=" + video_star_number +
                ", video_forward_number=" + video_forward_number +
                ", user_name='" + user_name + '\'' +
                ", user_avatar_path='" + user_avatar_path + '\'' +
                ", videoSelections=" + videoSelections +
                ", isThumbUp=" + isThumbUp +
                ", isCoin=" + isCoin +
                '}';
    }
}
