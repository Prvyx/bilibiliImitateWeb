import React, {Component} from 'react';
import {Col, Row,Card,Empty,Button } from "antd";

import './index.css'
import axios from "axios";
import {Link} from "react-router-dom";
import {BASE_URL} from 'utils/url'
import PlayCountIcon from "./Icon/PlayCountIcon";

const { Meta } = Card;

class RecommendContainer extends Component {
    state={}

    // 自定义函数
    // 获取recommendList数据
    getData=()=>{
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        let _api='recommendContainer_api'
        axios.post(BASE_URL+'/api/video/recommendContainer.ajax',{userId:'1'})
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
        if(this.state.recommendList===undefined){
            return (
                <Col span={15}>
                    <Empty style={{padding: 120,height: '300px'}} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Col>
            )
        }else{
            return (
                <Col span={15} >
                    <Row gutter={[10, 20]} style={{position: 'relative'}}>
                        {
                            (this.state.recommendList||[]).map((recommendObj)=>{
                                return (
                                    <Col key={recommendObj.video_id} span={7} style={{height: 200,marginLeft: 10,border: "1px solid #ffffff"}}>
                                        <Card
                                            hoverable
                                            style={{ width: "100%" ,height:"100%"}}
                                            cover={
                                                <Link to={`/video/${recommendObj.video_id}`} target={'_blank'}
                                                      style={{position:'relative'}}
                                                >
                                                    <img
                                                        alt="example"
                                                        src={recommendObj.video_img_path}
                                                        style={{width:'100%',height:'100%',borderRadius:8}}
                                                    />
                                                    <div style={{position:'absolute',top:90,left:8,color:'#ffffff'}}>
                                                        <PlayCountIcon/>{recommendObj.video_play_count}
                                                    </div>
                                                    <div style={{position:'absolute',top:90,right:8,color:'#ffffff'}}>
                                                        {recommendObj.duration}
                                                    </div>
                                                </Link>}
                                            size={"small"}
                                        >
                                            <Meta
                                                title={<Link to={`/video/${recommendObj.video_id}`} target={'_blank'}>{recommendObj.video_title}</Link>}
                                                description={<a href="https://www.bilibili.com/" target={`_blank`}>up:{recommendObj.user_name} · {recommendObj.video_datetime}</a>}
                                            />
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        <Button
                                style={{position:'absolute',top:10,right:10,padding: '0 10px',width: 40,height:80,borderRadius: 8}}
                                onClick={this.getData}
                        >
                            <div>换</div>
                            <div>一</div>
                            <div>换</div>
                        </Button>
                    </Row>
                </Col>
            );
        }
    }
}

export default RecommendContainer;