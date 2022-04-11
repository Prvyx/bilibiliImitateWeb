package com.prvyx.model.domain;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 18:49
 */

public class UserStarDir {
    private String star_dir_id;
    private String star_dir_title;
    private Boolean isExist;

    public UserStarDir() {
    }

    public UserStarDir(String star_dir_id, String star_dir_title, Boolean isExist) {
        this.star_dir_id = star_dir_id;
        this.star_dir_title = star_dir_title;
        this.isExist = isExist;
    }

    public String getStar_dir_id() {
        return star_dir_id;
    }

    public void setStar_dir_id(String star_dir_id) {
        this.star_dir_id = star_dir_id;
    }

    public String getStar_dir_title() {
        return star_dir_title;
    }

    public void setStar_dir_title(String star_dir_title) {
        this.star_dir_title = star_dir_title;
    }

    public Boolean getExist() {
        return isExist;
    }

    public void setExist(Boolean exist) {
        isExist = exist;
    }

    @Override
    public String toString() {
        return "UserStarDir{" +
                "star_dir_id='" + star_dir_id + '\'' +
                ", star_dir_title='" + star_dir_title + '\'' +
                ", isExist=" + isExist +
                '}';
    }
}
