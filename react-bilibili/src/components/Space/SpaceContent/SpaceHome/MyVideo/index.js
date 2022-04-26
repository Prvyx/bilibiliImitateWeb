import React, {Component} from 'react';
import {Card, List} from "antd";
import axios from "axios";
import './index.css'
import {Link} from "react-router-dom";
import {BASE_URL} from 'utils/url'

const {Meta}=Card

class MyVideo extends Component {
    state={}

    componentDidMount() {
        this.getMyVideoData()
    }

    getMyVideoData=()=>{
        let _url=BASE_URL+'/api/user/video4ByUserId.ajax'
        if(this.props.userId!=='-1'){
            axios.post(_url,{userId:this.props.userId})
                .then(_d=>{
                    console.log(_d.data.data)
                    this.setState({myVideoData:_d.data.data},()=>{
                        this.render()
                    })
                })
        }
    }
    render() {
        console.log(this.props.userId);
        const myVideoData=this.state.myVideoData||[]
        return (
            <div className={`myVideo`}>
                <span>我的视频</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={myVideoData}
                    renderItem={item => (
                        <List.Item key={item.video_id}>
                            <Card
                                hoverable
                                style={{ width: "100%" ,height:"100%"}}
                                cover={<img onClick={()=>{window.open("https://www.bilibili.com/","_blank")}} alt="example" src={`${item.video_img_path}`} style={{borderRadius:8}}/>}
                                size={"small"}
                            >
                                <Meta
                                    style={{fontSize: 12}}
                                    title={<a href="https://www.bilibili.com/"
                                              target={`_blank`}>{`${item.video_title}`}</a>}
                                    description={<Link to={`/video/${item.video_id}`}>播放量：{item.video_play_count} {item.video_datetime}</Link>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default MyVideo;