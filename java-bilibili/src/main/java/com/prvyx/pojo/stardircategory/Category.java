package com.prvyx.pojo.stardircategory;

public class Category {
    private String star_dir_id;
    private String star_dir_title;
    private String star_dir_category;

    public Category() {
    }

    public Category(String star_dir_id, String star_dir_title, String star_dir_category) {
        this.star_dir_id = star_dir_id;
        this.star_dir_title = star_dir_title;
        this.star_dir_category = star_dir_category;
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

    public String getStar_dir_category() {
        return star_dir_category;
    }

    public void setStar_dir_category(String star_dir_category) {
        this.star_dir_category = star_dir_category;
    }

    @Override
    public String toString() {
        return "Category1{" +
                "star_dir_id='" + star_dir_id + '\'' +
                ", star_dir_title='" + star_dir_title + '\'' +
                ", star_dir_category='" + star_dir_category + '\'' +
                '}';
    }
}
