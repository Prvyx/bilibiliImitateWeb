import React, {Component} from 'react';
import {Descriptions, Layout} from 'antd'
import SendBar from "./SendBar";
import ToolbarReport from "./ToolbarReport";
import InfoText from "./InfoText";
import CommentBlock from "./CommentBlock";
import UpInfo from "./UpInfo";
import VideoList from "./VideoList";
import PlayerBlock from "./PlayerBlock";
import {Route, Switch} from "react-router-dom";
import cookie from 'react-cookies'
import axios from "axios";
import {BASE_URL} from 'utils/url'

const {Content,Sider} = Layout

class Video extends Component {
    state={}

    analyzeLocation(location) {
        const id = location.pathname.slice(7)
        this.setState({id: id},()=>{
            this.getVideoData()
        })
    }

    getVideoData=()=>{
        // ApiPost-Mock数据
        // let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        // let _api=`video${this.state.id}_api`

        // 向后台要数据
        let _url=BASE_URL+'/api/video/videoDetail.ajax'
        axios.post(_url,{videoId:this.state.id,watchUserId:cookie.load('user_id')})
            .then(_d=>{
                console.log(_d.data)
                this.setState({videoData:_d.data.data},()=>{
                    this.render()
                })
            })
    }
    componentDidMount() {
        const {location}=this.props
        this.analyzeLocation(location)
    }
    // 提供给ToolbarReport子组件的回调
    callback1=()=>{
        this.getVideoData()
    }

    render() {
        const videoData=this.state.videoData||Object //||Object神来之笔,此处不能null
        const sanlian={
            thumbUpCount:videoData.video_thumb_up_number,
            coinCount:videoData.video_coin_number,
            starCount:videoData.video_star_number,
            forwardCount:videoData.video_forward_number,
            thumbUp:videoData.thumbUp,
            isCoin:videoData.coin,
            video_id:this.props.location.pathname.slice(7)
        }
        return (
            <div>
                <Layout style={{margin: '0 100px',width: 1060}}>
                    <Content style={{backgroundColor: "#ffffff"}}>
                        <Descriptions column={16} style={{backgroundColor: ""}} size={`small`} title={`${videoData.video_title}`}>
                            <Descriptions.Item span={3} label="播放量">{videoData.video_play_count}</Descriptions.Item>
                            <Descriptions.Item span={3} label="弹幕量">{videoData.video_barrage_count}</Descriptions.Item>
                            <Descriptions.Item span={4} label="日期">{videoData.video_datetime}</Descriptions.Item>
                            <Descriptions.Item span={5} label="转载权限">{videoData.is_forward_allowed?'可以转载':'未经作者授权，禁止转载'}</Descriptions.Item>
                        </Descriptions>
                        <Switch>
                            <Route path={`/video/${videoData.video_id}`} component={PlayerBlock}/>
                        </Switch>
                        <SendBar/>
                        <ToolbarReport {...sanlian} callback1={this.callback1}/>
                    </Content>
                    <Sider width={370} style={{backgroundColor: "#ffffff"}}>
                        <UpInfo name={videoData.user_name} userAvatarPath={videoData.user_avatar_path}/>
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