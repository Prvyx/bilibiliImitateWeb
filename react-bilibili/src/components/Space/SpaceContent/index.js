import React, {Component} from 'react';
import {Tabs, Layout, Input} from "antd";
import SpaceHome from "./SpaceHome";
import SpaceActive from "./SpaceActive";
import SpaceContribute from "./SpaceContribute";
import SpaceList from "./SpaceList";
import SpaceStar from "./SpaceStar";
import SpaceSubscribe from "./SpaceSubscribe";
import SpaceSetting from "./SpaceSetting";
import {AndroidOutlined, AppleOutlined} from "@ant-design/icons";
import SpaceFocusOrFollower from "./SpaceFocusOrFollower";
import SpaceSider from "../SpaceSider";

const {Content}=Layout
const {TabPane} = Tabs
class SpaceContent extends Component {
    render() {
        const userId=this.props.userId
        const spaceContentProps=this.props.spaceContentProps

        const followedNumber=spaceContentProps!==undefined?spaceContentProps.followedNumber:-1
        const followerNumber=spaceContentProps!==undefined?spaceContentProps.followerNumber:-1
        const thumbUpNumber=spaceContentProps!==undefined?spaceContentProps.thumbUpNumber:-1
        const playCount=spaceContentProps!==undefined?spaceContentProps.playCount:-1
        const announceContent=spaceContentProps!==undefined?spaceContentProps.announceContent:'test'

        const numberData = [
            {
                title: '关注数',
                numberData:followedNumber
            },
            {
                title: '粉丝数',
                numberData:followerNumber
            },
            {
                title: '获赞数',
                numberData:thumbUpNumber
            },
            {
                title: '播放数',
                numberData:playCount
            },
            {
                title: '阅读数',
                numberData:123
            },
        ];

        const spaceHomeSiderProps={
            userId:userId,
            announceContent:announceContent
        };
        return (
            <Content>
                <Tabs defaultActiveKey="1" style={{marginLeft: 15}}>
                    <TabPane tab={
                        <span><AppleOutlined />主页</span>
                    } key="1">
                        <SpaceHome userId={userId} spaceHomeSiderProps={spaceHomeSiderProps}/>
                    </TabPane>
                    <TabPane tab={
                        <span><AndroidOutlined />动态</span>
                    } key="2">
                        <SpaceActive/>
                    </TabPane>
                    <TabPane tab={
                        <span><AppleOutlined />投稿</span>
                    } key="3">
                        <SpaceContribute/>
                    </TabPane>
                    <TabPane tab={
                        <span><AndroidOutlined />合集和列表</span>
                    } key="4">
                        <SpaceList/>
                    </TabPane>
                    <TabPane tab={
                        <span><AndroidOutlined />收藏</span>
                    } key="5">
                        <SpaceStar/>
                    </TabPane>
                    <TabPane tab={
                        <span><AndroidOutlined />订阅</span>
                    } key="6">
                        <SpaceSubscribe/>
                    </TabPane>
                    <TabPane tab={
                        <span><AndroidOutlined />设置</span>
                    } key="7">
                        <SpaceSetting/>
                    </TabPane>

                    <TabPane tab={
                        <span>{numberData[0].numberData}关注数</span>
                    } key="8">
                        <SpaceFocusOrFollower id='1' userId={userId}/>
                    </TabPane>
                    <TabPane tab={
                        <span>{numberData[1].numberData}粉丝数</span>
                    } key="9">
                        <SpaceFocusOrFollower id='2' userId={userId}/>
                    </TabPane>
                    <TabPane disabled tab={
                        <span>{numberData[2].numberData}获赞数</span>
                    } key="10">
                        <SpaceFocusOrFollower/>
                    </TabPane>
                    <TabPane disabled tab={
                        <span>{numberData[3].numberData}播放数</span>
                    } key="11">
                        <SpaceFocusOrFollower/>
                    </TabPane>
                    <TabPane disabled tab={
                        <span>{numberData[4].numberData}阅读数</span>
                    } key="12">
                        <SpaceFocusOrFollower/>
                    </TabPane>
                </Tabs>
            </Content>
        );
    }
}

export default SpaceContent;