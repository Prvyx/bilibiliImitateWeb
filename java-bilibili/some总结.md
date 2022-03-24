### 2022.3.20
- 之前写的项目，用的jquery，可以自动解析post请求的参数，并在后台直接eg:String userId获得；
- 而axios的post请求的参数，前端与jquery请求的一样（eg:{userId:'1'}），但是后端不能直接String userId获得，
  需要这样：@RequestBody Map<String,String> dataMap，因为axios对于发过来的{userId:'1'}对象并不会自动解析，后端接收的是未解析过的对象，且是post请求(需要@RequestBody注解)
  所以，这里使用@RequestBody Map<String,String> dataMap，然后String userId= dataMap.get("userId")来获得相应的参数;
- 总结：jquery会自动解析，而axios不会自动解析（可能这就是jquery比较重，而axios比较轻的原因吧）。
  axios的post请求，后台需要带上@RequestBody注解 来提取请求“体”的内容；而@RequestParam注解是 来提取请求“头”的内容
### 2022.3.23
- Mybatis中的mapper接口中的方法，需要传递多个参数时，可以使用Mybatis包中的注解：@Param("")来解决
- 查找资料：https://www.w3cschool.cn/mybatis/mybatis-xwbe3bs2.html
### 2022.3.24
- application/json、multipart/form-data、application/x-www-form-urlencoded 请求正文的MIME类型
  - application/json：传递的参数为JSON数据
  - multipart/form-data：传递的参数为文件
  - application/x-www-form-urlencoded：传递的参数变为urlencoded的形式，eg：{userId:'1',userPwd:'2'} ==>(POST) 请求体中：userId='1'&userPwd='2' 