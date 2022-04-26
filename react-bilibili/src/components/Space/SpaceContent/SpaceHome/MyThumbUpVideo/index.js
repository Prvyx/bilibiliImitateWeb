import React, {Component} from 'react';
import {Card, List} from "antd";
import axios from "axios";
import cookie from "react-cookies";
import {BASE_URL} from 'utils/url'

const {Meta}=Card
class MyThumbUpVideo extends Component {
    state={}
    componentDidMount() {
        this.getThumbUpVideo()
    }
    // 拉取最近点赞视频列表数据
    getThumbUpVideo(){
        let _url=BASE_URL+'/api/user/thumbUpVideo.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                if(_d.data.status===0){
                    this.setState({myThumbUpVideoData:_d.data.data})
                }
            })
    }
    render() {
        const myThumbUpVideoData=this.state.myThumbUpVideoData||[]
        return (
            <div>
                <span>最近点赞的视频</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={myThumbUpVideoData}
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
                                    description={<a href="https://www.bilibili.com/" target={`_blank`}>播放量:{`${item.video_play_count}`} · {`${item.video_datetime}`}</a>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default MyThumbUpVideo;