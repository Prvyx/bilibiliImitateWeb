### 2022.3.3
- antd栅格系统的不熟悉，出现了现在未解决的问题
### 2020.3.10
- 关于循环中如何使用 async/await：https://www.php.cn/js-tutorial-465033.html
### 2020.3.12
- 关于video详情页的设计问题
![img.png](img.png)
  最初，没有考虑Video组件刚挂载的问题，只是在2、3处进行处理（最初只考虑了2只能被3影响，实际Video组件挂载的时候也能影响2）
  - /video对应Video父组件的路由 
  - /video/BV1wy4y1D7JT对应PlayerBlock子组件的路由 
  - 实际上，2被2个地方影响。
    - 首先是Video组件的挂载，同时也会把PlayerBlock子组件给渲染出来，
    这时你并没有点击3，2的this.props.location为undefined，那怎么根据已挂载的Video路由组件渲染合适的PlayerBlock组件呢？
    没错，通过父子组件的传递参数来解决，Video可以通过this.props.location.search来获得url的参数，然后给PlayerBlock子组件直接传参，
    PlayerBlock组件接收到后，获取url的视频数据进行渲染。
    - 然后，3也可以影响2，这个时候，就通过路由组件的传参来解决了。2获得3传来的参数，重新渲染2
    ```react
    // VideoList组件（3）
    <Link to={`/video/BV1wy4y1D7JT?p=${item.id}`}>
    // Video路由组件（2）
    <Switch>
        <Route path={`/video/BV1wy4y1D7JT`} component={PlayerBlock}/>
    </Switch>
    ```
  - 总结：2处的渲染受到2个地方影响（1、3），1的话，是因为父组件渲染子组件时需要；3的话，是Video组件挂载完之后，3处通过给2路由组件传参来影响
### 2022.3.14
  - react-router-dom的<Switch>相当于一个开关，这个开关决定了“其中所有路由”的挂载与否
### 2022.3.15
  - 当时的情况如下（出现bug的情景复现）：有一个路由组件，其中包含播放器组件、播放列表组件等，我根据路由组件的this.props.location获取相应的参数，然后根据参数获取后台数据（后台数据包含id），
    然后又想把获取的后台数据的id传递给播放列表子组件（通过this.props传递），让子组件去拿视频列表。
    这其实已经出现问题，因为播放列表子组件的首次渲染肯定是因为父组件的渲染，但后台数据的id是父组件异步获取到的，
    而这时（指首次渲染），父组件传递给子组件的id肯定为undefined，会导致子组件出现bug

  - 在父组件中获取后台数据后，切勿在该父组件的子组件中再次向后台要数据。
    
    因为可能出现这种情况，父组件会根据后台数据渲染其中的子组件，你还想在子组件中获取一些后台数据， 这就会引起”父组件渲染子组件“与”子组件自行根据获取的数据进行的渲染“之间的冲突
    比如：子组件想要父组件后台数据的id，然后根据父组件传来的id再次向后台要数据。
    但是子组件首先肯定是因为父组件的渲染而进行渲染，这时传递的id参数肯定为undefined，子组件肯定拿不到想要的数据
    
    总结：父组件在获取数据时，直接把子组件需要的数据给获取到，直接使用this.props给子组件传递即可。或者父组件不要获取数据，而是让它的多个子组件各自获取自己的数据，从而防止渲染冲突
### 2022.3.20
  - create-react-app配置代理问题
  - B站资料：https://www.bilibili.com/video/BV1wy4y1D7JT?p=65
  - 但根据上面资料，还是无法运行
  - 查找StackOverFlow资料:https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object，使用http-proxy-middleware，成功
  - 后续查找到github资料:https://github.com/facebook/create-react-app/issues/5103，官方说支持字符串型的package.json文件中的proxy，但本机却不行，报错，官方提供的第二种方法（也就是sof（StackOverFlow）提供的方法），可以