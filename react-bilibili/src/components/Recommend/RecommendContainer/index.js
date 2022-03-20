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
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        let _api='recommendContainer_api'
        axios.post('http://localhost:3000/api/recommendContainer.ajax',{userId:'1'})
            .then(_d=>{
                if(_d.data.status===0){
                    this.setState({recommendList:_d.data.data})
                }else{
                    console.log(_d.data.msg)
                }
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
                                <Col key={recommendObj.video_id} span={7} style={{height: 200,marginLeft: 10,border: "1px solid #ffffff"}}>
                                    <Card
                                        hoverable
                                        style={{ width: "100%" ,height:"100%"}}
                                        cover={<img onClick={()=>{window.open("https://www.bilibili.com/","_blank")}} alt="example" src={recommendObj.video_img_path} style={{borderRadius:8}}/>}
                                        size={"small"}
                                    >
                                        <Meta
                                            title={<a href="https://www.bilibili.com/"
                                                      target={`_blank`}>{recommendObj.video_title}</a>}
                                            description={<a href="https://www.bilibili.com/" target={`_blank`}>up:{recommendObj.fk_user_id} · {recommendObj.video_datetime}</a>}
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