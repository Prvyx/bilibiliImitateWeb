package com.prvyx.utils;

import java.io.File;
import java.nio.file.Files;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/05/11 14:09
 */

public class DirsFilesHandler {
    private static final String testDir="C:\\Users\\呵\\Desktop\\shiyan";
    /**
     * @param dir: 删除dir目录
     * @return void
     * @author Tobe
     * @description TODO
     * @date 2022/5/11 14:09
     */
    public static void deleteDir(String dir){
        delete(new File(dir));
    }
    private static void delete(File file){
        if(file.isFile()){
            file.delete();
            return;
        }
        // 若file为目录
        for (File listFile : file.listFiles()) {
            delete(listFile);
        }
        // listFile被删除完后，判断file是否为空并进行删除
        if(file.isDirectory()&&file.list().length==0){
            System.out.println("empty dir:"+file);
            if(file.delete()){
                System.out.println(file+"被删除");
            }else {
                System.out.println(file+"delete fail");
            }
        }
    }

    public static void main(String[] args) {
        deleteDir(testDir);
    }
}
