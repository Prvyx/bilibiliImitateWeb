#### 2022.4.27
1. 设置后台网址的url，需要react的全局变量：
  - 资料：
    - [添加自定义环境变量](https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/)
    - [react配置环境变量 的视频](https://www.bilibili.com/video/BV1JZ4y1276P?p=7)
  - 然后又遇到了一些问题：React好像无法通过绝对路径import
    - 资料：
      - [Create React app 引用中使用绝对路径](https://juejin.cn/post/6844903850013360142)
      - [Create React app-Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
2. 设置一个盒子不透明度（opacity）为0，盒子内的文字不透明
    - 使用background:rgba(0,0,0,0);而不是opacity:0
    - 原因：后者有继承性，而前者无