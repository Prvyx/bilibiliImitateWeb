1. 后端
- tomcat环境：
    - 腾讯云宝塔应用商店下载的tomcat不能用，运行后netstat -nlp | grep 8080有，腾讯云那开放了8080端口，但为啥访问不到？：
    - 原因：在腾讯云宝塔面板那，宝塔那的8080没开放。可能是客户端请求8080端口，先进入腾讯云的8080，然后再进入腾讯云宝塔的8080（权限有点高啊），最后进入Tomcat
    - 总结：在腾讯云自带宝塔那，外界要想访问某端口，需要把腾讯云、宝塔的该端口都开放（我记得阿里云不用，腾讯云给自家宝塔的权限有点大呀）
- 更新jdk版本（8->16）
    - 资料：[linux 卸载jdk和安装](https://www.cnblogs.com/javabg/p/10332993.html)
2. Mysql数据库：
- 使用Navicat分别连接本地以及服务器，使用“数据传输”，直接把本地的bilibili的所有表copy到服务器
  [![](http://8.141.144.189/wp-content/uploads/2022/04/wp_editor_md_faf9b43803e978c9979de5aedb62cbaa.jpg)](http://8.141.144.189/wp-content/uploads/2022/04/wp_editor_md_faf9b43803e978c9979de5aedb62cbaa.jpg)
3. 前端
- node环境
    - 资料：[Linux安装node](https://www.cnblogs.com/qiangyuzhou/p/11589793.html#:~:text=LINUX%20%E5%AE%89%E8%A3%85NODEJS%E7%8E%AF%E5%A2%83%E4%BB%A5%E5%8F%8A%E8%B7%AF%E5%BE%84%E9%85%8D%E7%BD%AE%20linux%E5%AE%89%E8%A3%85nodejs%E6%9C%892%E7%A7%8D%E6%96%B9%E5%BC%8F%E4%B8%80%E7%A7%8D%E7%AE%80%E5%8D%95%E7%9A%84%EF%BC%8C%E8%A7%A3%E5%8E%8B%E5%8D%B3%E5%8F%AF%E7%94%A8%EF%BC%9B%E5%8F%A6%E4%B8%80%E7%A7%8D%EF%BC%8C%E9%80%9A%E8%BF%87%E4%B8%8B%E8%BD%BDsource,code%20%EF%BC%8C%E9%80%9A%E8%BF%87%E7%BC%96%E8%AF%91%EF%BC%8Cmake%EF%BC%8Cmake%20install%E5%91%BD%E4%BB%A4%E6%9D%A5%E5%AE%89%E8%A3%85%E3%80%82)
- nginx环境
    - 了解到react项目打包（npm run build）好之后，需要部署到服务器
        1. （未采用）下载一个插件npm i serve -g，该插件可以把某个目录作为前端项目的根目录
        2. （采用）服务器搭建nginx环境，把打包好的东西部署在nginx上
            - 资料：[Linux搭建nginx环境](https://www.cnblogs.com/pxstar/p/14808244.html)
            - 问题1以及解决方式：react路由跳转出现404
              - 资料：[解决react使用BrowserRouter部署后刷新页面报404](https://www.jianshu.com/p/23f02b106e69)
            - 问题2以及解决方式：跨域问题
              - 原因：react项目的命令npm run build打包并没有把setProxy文件带上
              - 解决方式：通过nginx的反向代理。(查了半天资料，还不如自己认真想下代理关系)
```
    # nginx.conf文件新增：
    # 最好配置在location / {}的上面
    location /api/ {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,web-token,app-token,Authorization,Accept,Origin,Keep-Alive,User-Agent,X-Mx-ReqToken,X-Data-Type,X-Auth-Token,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
    # 此处8091是我们本地运行项目的端口号，设置成跟你本地起的服务端口号一样就行
    proxy_pass    http://127.0.0.1:8080/api/;# 相当于http://127.0.0.1:3000/api/被nginx转为了http://127.0.0.1:8080/api/
    }
```       
