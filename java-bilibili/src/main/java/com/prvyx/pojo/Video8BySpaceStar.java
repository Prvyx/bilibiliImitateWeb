package com.prvyx.pojo;

/**
 * @program: java-bilibili
 * @description: Space前端路由的SpaceContent的Home的我的收藏 的实体类
 * @author: Prvyx
 * @created: 2022/03/25 16:24
 */

public class Video8BySpaceStar {
    private String star_dir_title;
    private String video_id;
    private String video_img_path;

    public Video8BySpaceStar() {
    }

    public Video8BySpaceStar(String star_dir_title, String video_id, String video_img_path) {
        this.star_dir_title = star_dir_title;
        this.video_id = video_id;
        this.video_img_path = video_img_path;
    }

    public String getStar_dir_title() {
        return star_dir_title;
    }

    public void setStar_dir_title(String star_dir_title) {
        this.star_dir_title = star_dir_title;
    }

    public String getVideo_id() {
        return video_id;
    }

    public void setVideo_id(String video_id) {
        this.video_id = video_id;
    }

    public String getVideo_img_path() {
        return video_img_path;
    }

    public void setVideo_img_path(String video_img_path) {
        this.video_img_path = video_img_path;
    }

    @Override
    public String toString() {
        return "Video8BySpaceStar{" +
                "star_dir_title='" + star_dir_title + '\'' +
                ", video_id='" + video_id + '\'' +
                ", video_img_path='" + video_img_path + '\'' +
                '}';
    }
}
