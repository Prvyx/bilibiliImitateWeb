package com.prvyx.pojo;

import java.io.Serializable;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/04/02 22:06
 */

public class NewStarDir implements Serializable {
    private String star_dir_id;
    private Boolean exist;

    public NewStarDir() {
    }

    public NewStarDir(String star_dir_id, Boolean exist) {
        this.star_dir_id = star_dir_id;
        this.exist = exist;
    }

    public String getStar_dir_id() {
        return star_dir_id;
    }

    public void setStar_dir_id(String star_dir_id) {
        this.star_dir_id = star_dir_id;
    }

    public Boolean getExist() {
        return exist;
    }

    public void setExist(Boolean exist) {
        this.exist = exist;
    }

    @Override
    public String toString() {
        return "NewStarDir{" +
                "star_dir_id='" + star_dir_id + '\'' +
                ", exist=" + exist +
                '}';
    }
}
