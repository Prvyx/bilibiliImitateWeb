package com.prvyx.model.domain;
//若myql表中字段为user_id，而mybatis中为userId，mybatis映射不到，修改数据库表字段命名方式为驼峰命名方式/修改java中pojo类命名方式为user_name
public class User {
    private String user_id;
    private String user_name;
    private String user_avatar_path;
    private boolean is_man;
    private int grade;
    private boolean is_vip;
    private int play_count;
    private int thumb_up_number;
    private int followed_number;
    private int follower_number;
    private String announce_content;
    private String signature_content;

    public User() {
    }

    public User(String user_id, String user_name, String user_avatar_path, boolean is_man, int grade, boolean is_vip, int play_count, int thumb_up_number, int followed_number, int follower_number, String announce_content, String signature_content) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_avatar_path = user_avatar_path;
        this.is_man = is_man;
        this.grade = grade;
        this.is_vip = is_vip;
        this.play_count = play_count;
        this.thumb_up_number = thumb_up_number;
        this.followed_number = followed_number;
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

    public boolean isIs_man() {
        return is_man;
    }

    public void setIs_man(boolean is_man) {
        this.is_man = is_man;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public boolean isIs_vip() {
        return is_vip;
    }

    public void setIs_vip(boolean is_vip) {
        this.is_vip = is_vip;
    }

    public int getPlay_count() {
        return play_count;
    }

    public void setPlay_count(int play_count) {
        this.play_count = play_count;
    }

    public int getThumb_up_number() {
        return thumb_up_number;
    }

    public void setThumb_up_number(int thumb_up_number) {
        this.thumb_up_number = thumb_up_number;
    }

    public int getFollowed_number() {
        return followed_number;
    }

    public void setFollowed_number(int followed_number) {
        this.followed_number = followed_number;
    }

    public int getFollower_number() {
        return follower_number;
    }

    public void setFollower_number(int follower_number) {
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
        return "User{" +
                "user_id='" + user_id + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_avatar_path='" + user_avatar_path + '\'' +
                ", is_man=" + is_man +
                ", grade=" + grade +
                ", is_vip=" + is_vip +
                ", play_count=" + play_count +
                ", thumb_up_number=" + thumb_up_number +
                ", followed_number=" + followed_number +
                ", follower_number=" + follower_number +
                ", announce_content='" + announce_content + '\'' +
                ", signature_content='" + signature_content + '\'' +
                '}';
    }
}
