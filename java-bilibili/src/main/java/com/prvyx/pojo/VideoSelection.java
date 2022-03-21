package com.prvyx.pojo;

public class VideoSelection {
    private int selection_id;
    private String selection_title;
    private String selection_path;
    private String selection_duration;

    public VideoSelection() {
    }

    public VideoSelection(int selection_id, String selection_title, String selection_path, String selection_duration) {
        this.selection_id = selection_id;
        this.selection_title = selection_title;
        this.selection_path = selection_path;
        this.selection_duration = selection_duration;
    }

    public int getSelection_id() {
        return selection_id;
    }

    public void setSelection_id(int selection_id) {
        this.selection_id = selection_id;
    }

    public String getSelection_title() {
        return selection_title;
    }

    public void setSelection_title(String selection_title) {
        this.selection_title = selection_title;
    }

    public String getSelection_path() {
        return selection_path;
    }

    public void setSelection_path(String selection_path) {
        this.selection_path = selection_path;
    }

    public String getSelection_duration() {
        return selection_duration;
    }

    public void setSelection_duration(String selection_duration) {
        this.selection_duration = selection_duration;
    }

    @Override
    public String toString() {
        return "VideoSelection{" +
                "selection_id=" + selection_id +
                ", selection_title='" + selection_title + '\'' +
                ", selection_path='" + selection_path + '\'' +
                ", selection_duration='" + selection_duration + '\'' +
                '}';
    }
}
