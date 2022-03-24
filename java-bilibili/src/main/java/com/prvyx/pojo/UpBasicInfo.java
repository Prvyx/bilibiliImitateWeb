package com.prvyx.pojo;

public class UpBasicInfo {
    private String user_id;
    private String user_name;
    private String user_avatar_path;
    private String is_man;
    private String grade;
    private String is_vip;
    private String play_count;
    private String thumb_up_number;
    private String fan_number;
    private String follower_number;
    private String announce_content;
    private String signature_content;

    public UpBasicInfo() {
    }

    public UpBasicInfo(String user_id, String user_name, String user_avatar_path, String is_man, String grade, String is_vip, String play_count, String thumb_up_number, String fan_number, String follower_number, String announce_content, String signature_content) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_avatar_path = user_avatar_path;
        this.is_man = is_man;
        this.grade = grade;
        this.is_vip = is_vip;
        this.play_count = play_count;
        this.thumb_up_number = thumb_up_number;
        this.fan_number = fan_number;
        this.follower_number = follower_number;
        this.announce_content = announce_content;
        this.signature_content = signature_content;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_avatar_path() {
        return user_avatar_path;
    }

    public void setUser_avatar_path(String user_avatar_path) {
        this.user_avatar_path = user_avatar_path;
    }

    public String getIs_man() {
        return is_man;
    }

    public void setIs_man(String is_man) {
        this.is_man = is_man;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getIs_vip() {
        return is_vip;
    }

    public void setIs_vip(String is_vip) {
        this.is_vip = is_vip;
    }

    public String getPlay_count() {
        return play_count;
    }

    public void setPlay_count(String play_count) {
        this.play_count = play_count;
    }

    public String getThumb_up_number() {
        return thumb_up_number;
    }

    public void setThumb_up_number(String thumb_up_number) {
        this.thumb_up_number = thumb_up_number;
    }

    public String getFan_number() {
        return fan_number;
    }

    public void setFan_number(String fan_number) {
        this.fan_number = fan_number;
    }

    public String getFollower_number() {
        return follower_number;
    }

    public void setFollower_number(String follower_number) {
        this.follower_number = follower_number;
    }

    public String getAnnounce_content() {
        return announce_content;
    }

    public void setAnnounce_content(String announce_content) {
        this.announce_content = announce_content;
    }

    public String getSignature_content() {
        return signature_content;
    }

    public void setSignature_content(String signature_content) {
        this.signature_content = signature_content;
    }

    @Override
    public String toString() {
        return "UpBasicInfo{" +
                "user_id='" + user_id + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_avatar_path='" + user_avatar_path + '\'' +
                ", is_man='" + is_man + '\'' +
                ", grade='" + grade + '\'' +
                ", is_vip='" + is_vip + '\'' +
                ", play_count='" + play_count + '\'' +
                ", thumb_up_number='" + thumb_up_number + '\'' +
                ", fan_number='" + fan_number + '\'' +
                ", follower_number='" + follower_number + '\'' +
                ", announce_content='" + announce_content + '\'' +
                ", signature_content='" + signature_content + '\'' +
                '}';
    }
}
