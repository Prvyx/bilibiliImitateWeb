package com.prvyx.service.user.contribute;

import com.prvyx.mapper.video.InsertVideoMapper;
import com.prvyx.service.other.CheckVidS;
import com.prvyx.utils.DirsFilesHandler;
import com.prvyx.utils.MybatisUtils;
import com.prvyx.utils.UUIDUtils;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/26 21:52
 */

public class VideoS {
    private final String developmentEnv="C:\\Users\\呵\\Desktop\\bilibili\\react-bilibili\\public\\static\\video\\";
    private final String produceEnv="/www/wwwroot/build/static/video/";
    private final String developmentHistoryEnv="C:\\Users\\呵\\Desktop\\bilibili\\react-bilibili\\public\\static\\historyUploadVideo\\userId\\";
    private final String developmentHistoryEnv2="C:\\Users\\呵\\Desktop\\bilibili-resource\\userId\\";
    private final String produceHistoryUploadVideoEnv="/www/wwwroot";

    // 维护一个关于HistoryVideo的map，记录历史上传视频的序号
    private final static Map<String,Integer> map=new HashMap<>();

    // Upload video
    public Boolean uploadVideo(MultipartFile videoFile,String userId){
        if(map.get(userId)==null){
            map.put(userId,1);
        }else {
            map.put(userId,map.get(userId)+1);
        }
        int ordinal=map.get(userId);
        File historyVideoDir=new File(developmentHistoryEnv2+File.separator+userId+File.separator+ordinal);
        if(!historyVideoDir.exists()){
            historyVideoDir.mkdirs();
        }
//        System.out.println(videoFile.getName());//videoFile
//        System.out.println(videoFile.getOriginalFilename());//帮 我 想 个 标 题！.mp4
        try (BufferedOutputStream bos=new BufferedOutputStream(new FileOutputStream(historyVideoDir+File.separator+"1.mp4"))){
            //MultipartFile自带的获得byte[]的方法，不需要自定义InputStream了
            byte[] bytes=videoFile.getBytes();
            bos.write(bytes,0,bytes.length);
            System.out.println("上传成功,videoPath:"+historyVideoDir+File.separator+"1.mp4");

            return true;
        }catch (IOException e){
            map.put(userId,map.get(userId)-1);
            e.printStackTrace();
            return false;
        }
    }

    public Boolean getVideoContribute(MultipartFile videoFile,MultipartFile imgFile,String userId,String title,String introduce,String category,
                                      Boolean isForwardAllowed){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            String videoId;
            CheckVidS checkVidS=new CheckVidS();
            do{
                videoId= UUIDUtils.getRandomVidByUUID(12);
            }while (!checkVidS.checkVid(videoId));

            String videoImgPath="/static/video/"+videoId+"/img.png";
            String videoPath="/static/video/"+videoId+"/1.mp4";
            Date videoDatetime=new Date();

            // 字面常量，后期需修改
            String fkChannelId="1";
            int rs=sqlSession.getMapper(InsertVideoMapper.class).getVideoContribute(
                    videoId ,title, introduce, videoImgPath,
                    videoPath ,isForwardAllowed ,videoDatetime,
                    userId ,category,
                    fkChannelId);

            if(rs==1){
                // Mybatis 插入、删除、更新操作，需要提交；否则会自动回滚
                sqlSession.commit();

                // 将视频存储在指定位置
                File file=new File(developmentEnv+videoId);
                if(!file.exists()){
                    file.mkdirs();
                }else {
                    System.out.println(file.getName()+"已经存在");
                }
                file=new File(file.getAbsoluteFile()+File.separator+"1.mp4");
                System.out.println(file.getName());

                try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file))){
                    //MultipartFile自带的获得byte[]的方法，不需要自定义InputStream了
                    byte[] bytes = videoFile.getBytes();
                    int len = bytes.length;

                    bos.write(bytes, 0, len);

                }catch (Exception e){
                    e.printStackTrace();
                }

                //将首页图片存放至指定位置
                file=new File(developmentEnv+videoId);
                file=new File(file.getAbsoluteFile()+File.separator+"img.png");

                try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file))){
                    //MultipartFile自带的获得byte[]的方法，不需要自定义InputStream了
                    byte[] bytes = imgFile.getBytes();
                    int len = bytes.length;

                    bos.write(bytes, 0, len);

                }catch (Exception e){
                    e.printStackTrace();
                }

                return true;
            }else {
                return false;
            }
        }
    }
    public Boolean contributeVideo(MultipartFile coverImgFile, String title,Boolean isOriginal,
                                   String category, String introduce, Boolean isAllowedToReprint,
                                   String userId, int ordinal){
        try(SqlSession sqlSession= MybatisUtils.getSqlSession()){
            String videoId;
            CheckVidS checkVidS=new CheckVidS();
            do{
                videoId= UUIDUtils.getRandomVidByUUID(12);
            }while (!checkVidS.checkVid(videoId));

            String videoImgPath="/static/video/"+videoId+"/img.png";
            String videoPath="/static/video/"+videoId+"/1.mp4";
            Date videoDatetime=new Date();
            String duration="20:10";
            // 字面常量，后期需修改
            String fkChannelId="1";
            int rs=sqlSession.getMapper(InsertVideoMapper.class).getVideoContribute(
                    videoId ,title, introduce, videoImgPath,
                    videoPath ,isAllowedToReprint ,videoDatetime,
                    userId ,category,
                    fkChannelId);

            if(rs==1){
                // 将视频、封面图片存至指定位置
                // 将视频存储在指定位置
                File file=new File(developmentEnv+videoId);
                if(!file.exists()){
                    file.mkdirs();
                }else {
                    System.out.println(file.getName()+"已经存在");
                }
                file=new File(file.getAbsoluteFile()+File.separator+"1.mp4");

                File inputFile=new File(developmentHistoryEnv2+
                        userId+File.separator+ordinal+File.separator+"1.mp4");
                try (BufferedInputStream bis=new BufferedInputStream(new FileInputStream(inputFile));
                        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file))){
                    byte[] bytes=new byte[1024*4];
                    int len;
                    // len=bis.read(bytes))!=-1而不是len=bis.read(bytes))!=0
                    while ((len=bis.read(bytes))!=-1){
                        bos.write(bytes,0,len);
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
                //将首页图片存放至指定位置
                file=new File(developmentEnv+videoId);
                file=new File(file.getAbsoluteFile()+File.separator+"img.png");

                try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file))){
                    byte[] bytes = coverImgFile.getBytes();
                    int len = bytes.length;

                    bos.write(bytes, 0, len);

                }catch (Exception e){
                    e.printStackTrace();
                }

                // Mybatis 插入、删除、更新操作，需要提交；否则会自动回滚
                sqlSession.commit();

                // 暂行方法
                // 投稿成功后，把历史上传视频删掉，并把map的key为userId的删掉
                DirsFilesHandler.deleteDir(developmentHistoryEnv2+userId);
                map.remove(userId);

                return true;
            }else {
                return false;
            }
        }
    }
}
