import React, {Component} from 'react';
import axios from "axios";
import {Col,Carousel } from "antd";
import analyze from 'rgbaster'

import './index.css'

class AdvertContainer extends Component {
    state={}

    // 自定义函数
    // 获取数据
    // 用了async与await（两者可以把异步代码转为“看似的同步代码”），就不要使用之前版本的promise了，避免混淆
    // 最终解决：https://www.php.cn/js-tutorial-465033.html（2022.3.10白天再看看）
    // 来自MDN：
        // await 只在异步函数里面才起作用。它可以放在任何异步的，基于 promise 的函数（！！函数）之前。
        // 它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。
        // 您可以在调用任何返回Promise的函数（！！函数）时使用 await
    getData=async ()=>{
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897"
        let _d=await axios.get(_url+"/advertContainer_api");
        // console.log(_d)
        const promises =_d.data.advertList.map(async (advertObj)=>{
            const result=await analyze(advertObj.imgUrl, { scale: 0.6,ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)']});
            // 下面这一行为啥有数据？我不理解。猜测：因为它使用了result，而result还没有定义，等到result有了定义才去打印
            // console.log('mainColor:'+JSON.parse(JSON.stringify(result[0].color)))
            return result[0].color
        })

        const mainColors=await Promise.all(promises);
        // 下面这行为啥有数据？可能和26代码一个原因
        // console.log(JSON.parse(JSON.stringify(mainColors)))
        // console.log("advertList")
        // 下面这行没数据，因为_d.data.advertList的定义和await无关
        // console.log(JSON.parse(JSON.stringify(_d.data.advertList)))
        _d.data.advertList.map((advertObj,index)=>{
            advertObj.mainColor=mainColors[index]
            return advertObj
        })

        // JSON.parse(JSON.stringify())将对象转为真实形态(console.log()是在延迟一段时间后执行的，这就是22行代码console.log(_d)可以打印出数据的原因)
        // console.log(JSON.parse(JSON.stringify(_d.data.advertList)))
        this.setState({advertList:_d.data.advertList})
    }

    // 自带钩子
    componentDidMount() {
        this.getData()
    }

    render() {
        // console.log("render中:",this.state.advertList)
        return (
            <Col id={`advertID`} span={9} style={{backgroundColor: "",borderRadius: 8,maxHeight:338}}>
                <Carousel autoplay>
                    {
                        (this.state.advertList||[]).map((advertObj)=>{
                            // console.log('map2:',JSON.stringify(advertObj.mainColor))
                            return (
                                <div key={advertObj.title}>
                                    <h3 onClick={()=>{window.open(`${advertObj.toUrl}`,"_blank")}} className={`contentStyle`} style={{backgroundColor: `${advertObj.mainColor}`,backgroundImage: `url(${advertObj.imgUrl})`}}>{advertObj.title}</h3>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Col>
        );
    }
}

export default AdvertContainer;