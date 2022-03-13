import React, {Component} from 'react';
import {Col, Row,Card } from "antd";

import './index.css'
import axios from "axios";

const { Meta } = Card;

class RecommendContainer extends Component {
    state={}

    // 自定义函数
    // 获取recommendList数据
    getData=()=>{
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897"
        axios.get(_url+"/recommendContainer_api")
            .then(_d=>{
                this.setState({recommendList:_d.data.recommendList})
            })
    }

    // 自带钩子
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <Col span={15}>
                <Row gutter={[10, 20]}>
                    {
                        (this.state.recommendList||[]).map((recommendObj)=>{
                            return (
                                <Col key={recommendObj.id} span={7} style={{height: 200,marginLeft: 10,border: "1px solid #ffffff"}}>
                                    <Card
                                        hoverable
                                        style={{ width: "100%" ,height:"100%"}}
                                        cover={<img onClick={()=>{window.open("https://www.bilibili.com/","_blank")}} alt="example" src={recommendObj.imgUrl} style={{borderRadius:8}}/>}
                                        size={"small"}
                                    >
                                        <Meta
                                            title={<a href="https://www.bilibili.com/"
                                                      target={`_blank`}>{recommendObj.title}</a>}
                                            description={<a href="https://www.bilibili.com/" target={`_blank`}>up:{recommendObj.author} · {recommendObj.date}</a>}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        );
    }
}

export default RecommendContainer;