import React, {Component} from 'react';
import {Card, List} from "antd";
import axios from "axios";
import cookie from 'react-cookies'
const {Meta}=Card

class MyCoinVideo extends Component {
    state={}
    componentDidMount() {
        this.getCoinVideo()
    }

    // 拉取最近投币视频列表数据
    getCoinVideo(){
        let _url='http://localhost:3000/api/user/coinVideo.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({myCoinVideoData:_d.data.data})
            })
    }
    render() {
        const myCoinVideoData=this.state.myCoinVideoData||[]
        return (
            <div className={`myVideo`}>
                <span>最近投币的视频</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={myCoinVideoData}
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

export default MyCoinVideo;