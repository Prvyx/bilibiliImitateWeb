package com.prvyx.model.other;

import com.prvyx.model.domain.stardircategory.Category;

import java.util.List;

public class StarDirRetrieve {
    private List<Category> category1List;
    private List<Category> Category2List;
    private List<Category> category3List;

    public StarDirRetrieve() {
    }

    public StarDirRetrieve(List<Category> category1List, List<Category> category2List, List<Category> category3List) {
        this.category1List = category1List;
        Category2List = category2List;
        this.category3List = category3List;
    }

    public List<Category> getCategory1List() {
        return category1List;
    }

    public void setCategory1List(List<Category> category1List) {
        this.category1List = category1List;
    }

    public List<Category> getCategory2List() {
        return Category2List;
    }

    public void setCategory2List(List<Category> category2List) {
        Category2List = category2List;
    }

    public List<Category> getCategory3List() {
        return category3List;
    }

    public void setCategory3List(List<Category> category3List) {
        this.category3List = category3List;
    }

    @Override
    public String toString() {
        return "StarDirRetrieve{" +
                "category1List=" + category1List +
                ", Category2List=" + Category2List +
                ", category3List=" + category3List +
                '}';
    }
}
