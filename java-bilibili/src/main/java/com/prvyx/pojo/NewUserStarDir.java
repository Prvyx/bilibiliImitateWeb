package com.prvyx.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 20:50
 */

public class NewUserStarDir implements Serializable {
    private String userId;
    private String videoId;
    private List<NewStarDir> newStarDirs;

    public NewUserStarDir() {
    }

    public NewUserStarDir(String userId, String videoId, List<NewStarDir> newStarDirs) {
        this.userId = userId;
        this.videoId = videoId;
        this.newStarDirs = newStarDirs;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    public List<NewStarDir> getNewStarDirs() {
        return newStarDirs;
    }

    public void setNewStarDirs(List<NewStarDir> newStarDirs) {
        this.newStarDirs = newStarDirs;
    }

    @Override
    public String toString() {
        return "NewUserStarDir{" +
                "userId='" + userId + '\'' +
                ", videoId='" + videoId + '\'' +
                ", newStarDirs=" + newStarDirs +
                '}';
    }
}
