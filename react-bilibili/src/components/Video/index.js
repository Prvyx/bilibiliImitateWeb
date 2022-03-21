import React, {Component} from 'react';
import {Descriptions, Layout} from 'antd'
import PlayCountIcon from './Icon/PlayCountIcon'
import BarrageCountIcon from "./Icon/BarrageCountIcon";
import DateIcon from "./Icon/DateIcon";
import ReprintPermissionsIcon from "./Icon/ReprintPermissionsIcon";
import SendBar from "./SendBar";
import ToolbarReport from "./ToolbarReport";
import InfoText from "./InfoText";
import CommentBlock from "./CommentBlock";
import UpInfo from "./UpInfo";
import VideoList from "./VideoList";
import PlayerBlock from "./PlayerBlock";
import {Route, Switch} from "react-router-dom";
import qs from "querystring"
import axios from "axios";
const {Content,Sider} = Layout

class Video extends Component {
    state={}

    analyzeLocation(location) {
        const id = location.pathname.slice(7)
        console.log(id)
        this.setState({id: id},()=>{
            this.getVideoData()
        })
    }

    getVideoData=()=>{
        // ApiPost-Mock数据
        // let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        // let _api=`video${this.state.id}_api`

        // 向后台要数据
        let _url='http://localhost:3000/api/videoDetail.ajax'
        console.log(this.state.id)
        axios.post(_url,{videoId:this.state.id})
            .then(_d=>{
                this.setState({videoData:_d.data.data},()=>{
                    this.render()
                })
            })
    }
    componentDidMount() {
        const {location}=this.props
        this.analyzeLocation(location)
    }


    render() {
        const videoData=this.state.videoData||Object //||Object神来之笔,此处不能null
        const sanlian={
            thumbUpCount:videoData.video_thumb_up_number,
            coinCount:videoData.video_coin_number,
            starCount:videoData.video_star_number,
            forwardCount:videoData.video_forward_number
        }
        return (
            <div>
                <Layout style={{margin: '0 100px',width: 1060}}>
                    <Content style={{backgroundColor: "#ffffff"}}>
                        <Descriptions column={16} style={{backgroundColor: ""}} size={`small`} title="尚硅谷React技术全家桶全套完整版（零基础入门到精通/男神天禹老师亲授）">
                            <Descriptions.Item span={3} label="播放量">{videoData.video_play_count}</Descriptions.Item>
                            <Descriptions.Item span={3} label="弹幕量">{videoData.video_barrage_count}</Descriptions.Item>
                            <Descriptions.Item span={4} label="日期">{videoData.video_datetime}</Descriptions.Item>
                            <Descriptions.Item span={5} label="转载权限">{videoData.is_forward_allowed?'可以转载':'未经作者授权，禁止转载'}</Descriptions.Item>
                        </Descriptions>
                        <Switch>
                            <Route path={`/video/${videoData.video_id}`} component={PlayerBlock}/>
                        </Switch>
                        <SendBar/>
                        <ToolbarReport {...sanlian}/>
                    </Content>
                    <Sider width={370} style={{backgroundColor: "#ffffff"}}>
                        <UpInfo name={videoData.user_name}/>
                        <VideoList id={videoData.video_id} parts={videoData.videoSelections}/>
                    </Sider>
                </Layout>
                <InfoText introduce={videoData.introduce}/>
                <CommentBlock/>
            </div>
        );
    }
}

export default Video;