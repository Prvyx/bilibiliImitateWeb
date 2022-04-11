import React, {Component} from 'react';
import {Layout, Tabs, Radio, Space, List, Card} from 'antd';
import './index.css'
import {Link} from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";

const { TabPane } = Tabs;
const {Meta} =Card

class SpaceContribute extends Component {
    state = {
        tabPosition: 'left',
    };
    componentDidMount() {
        this.getLatestVideo()
        this.getPlayCountDescVideoData()
        this.getStarNumberDescVideoData()
    }

    // 拉取最新发布视频列表数据
    getLatestVideo(){
        let _url='http://localhost:3000/api/user/latestVideo.ajax'
        console.log(cookie.load('user_id'))
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({myLatestVideoData:_d.data.data})
            })
    }
    // 拉取最多播放视频列表数据
    getPlayCountDescVideoData=()=>{
        let _url='http://localhost:3000/api/user/mostPlayCountVideo.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({myStarDescVideoData:_d.data.data})
            })
    }
    // 拉取最多收藏视频列表数据
    getStarNumberDescVideoData=()=>{
        let _url='http://localhost:3000/api/user/mostStarVideo.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({myPlayCountDescVideoData:_d.data.data})
            })
    }
    render() {
        const { tabPosition } = this.state;
        const myLatestVideoData=this.state.myLatestVideoData||[]
        const myStarDescVideoData=this.state.myStarDescVideoData||[]
        const myPlayCountDescVideoData=this.state.myPlayCountDescVideoData||[]
        return (
            <Tabs tabPosition={tabPosition}>
                <TabPane tab="视频" key="1">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={myLatestVideoData}
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
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={myPlayCountDescVideoData}
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
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={myStarDescVideoData}
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
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="音频" key="2">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="专栏" key="3">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="相簿" key="4">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="全部" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="日常" key="2">
                            Content of Tab 2
                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        );
    }
}

export default SpaceContribute;