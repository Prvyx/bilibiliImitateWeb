package com.prvyx.service.user.contribute;

import com.prvyx.mapper.video.InsertVideoMapper;
import com.prvyx.service.other.CheckVidS;
import com.prvyx.utils.MybatisUtils;
import com.prvyx.utils.UUIDUtils;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Date;

/**
 * @program: java-bilibili
 * @description:
 * @author: Prvyx
 * @created: 2022/03/26 21:52
 */

public class VideoS {
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
                File file=new File("C:\\Users\\呵\\Desktop\\bilibili\\react-bilibili\\public\\static\\video\\"+videoId);
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
                file=new File("C:\\Users\\呵\\Desktop\\bilibili\\react-bilibili\\public\\static\\video\\"+videoId);
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
}
