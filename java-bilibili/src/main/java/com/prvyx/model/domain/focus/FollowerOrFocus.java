package com.prvyx.model.domain.focus;

/**
 * @program: java-bilibili
 * @description: 我关注了谁/谁关注了我
 * @author: Prvyx
 * @created: 2022/05/07 02:14
 */

public class FollowerOrFocus {
    private String follower_user_id;
    private String followed_user_id;
    private String focus_datetime;
    private String user_name;

    public FollowerOrFocus() {
    }

    public FollowerOrFocus(String follower_user_id, String followed_user_id, String focus_datetime, String user_name) {
        this.follower_user_id = follower_user_id;
        this.followed_user_id = followed_user_id;
        this.focus_datetime = focus_datetime;
        this.user_name = user_name;
    }

    public String getFollower_user_id() {
        return follower_user_id;
    }

    public void setFollower_user_id(String follower_user_id) {
        this.follower_user_id = follower_user_id;
    }

    public String getFollowed_user_id() {
        return followed_user_id;
    }

    public void setFollowed_user_id(String followed_user_id) {
        this.followed_user_id = followed_user_id;
    }

    public String getFocus_datetime() {
        return focus_datetime;
    }

    public void setFocus_datetime(String focus_datetime) {
        this.focus_datetime = focus_datetime;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    @Override
    public String toString() {
        return "FollowerOrFocus{" +
                "follower_user_id='" + follower_user_id + '\'' +
                ", followed_user_id='" + followed_user_id + '\'' +
                ", focus_datetime='" + focus_datetime + '\'' +
                ", user_name='" + user_name + '\'' +
                '}';
    }
}
