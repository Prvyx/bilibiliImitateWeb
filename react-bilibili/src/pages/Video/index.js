import React, {Component} from 'react';
import {Descriptions, Layout} from 'antd'
import PlayCountIcon from './Icon/PlayCountIcon'
import BarrageCountIcon from "./Icon/BarrageCountIcon";
import DateIcon from "./Icon/DateIcon";
import ReprintPermissionsIcon from "./Icon/ReprintPermissionsIcon";
import SendBar from "../../components/Video/SendBar";
import ToolbarReport from "../../components/Video/ToolbarReport";
import InfoText from "../../components/Video/InfoText";
import CommentBlock from "../../components/Video/CommentBlock";
import UpInfo from "../../components/Video/UpInfo";
import VideoList from "../../components/Video/VideoList";
import PlayerBlock from "../../components/Video/PlayerBlock";
import {Route, Switch} from "react-router-dom";
const {Content,Sider} = Layout

class Video extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Layout style={{margin: '0 100px',width: 1060}}>
                    <Content style={{backgroundColor: "#ffffff"}}>
                        <Descriptions column={16} style={{backgroundColor: ""}} size={`small`} title="尚硅谷React技术全家桶全套完整版（零基础入门到精通/男神天禹老师亲授）">
                            <Descriptions.Item span={3} label="播放量">451.3万</Descriptions.Item>
                            <Descriptions.Item span={3} label="弹幕量">1.5万</Descriptions.Item>
                            <Descriptions.Item span={4} label="日期">2020-07-26 12:00:54</Descriptions.Item>
                            <Descriptions.Item span={5} label="转载权限">未经作者授权，禁止转载</Descriptions.Item>
                        </Descriptions>
                        <Switch>
                            <Route path={`/video/BV1wy4y1D7JT`} component={PlayerBlock}/>
                        </Switch>
                        <SendBar/>
                        <ToolbarReport/>
                    </Content>
                    <Sider width={370} style={{backgroundColor: "#ffffff"}}>
                        <UpInfo/>
                        <VideoList/>
                    </Sider>
                </Layout>
                <InfoText/>
                <CommentBlock/>

            </div>
        );
    }
}

export default Video;