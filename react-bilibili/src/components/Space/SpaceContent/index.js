import React, {Component} from 'react';
import {Tabs,Layout} from "antd";
import SpaceHome from "./SpaceHome";
import SpaceActive from "./SpaceActive";
import SpaceContribute from "./SpaceContribute";
import SpaceList from "./SpaceList";
import SpaceStar from "./SpaceStar";
import SpaceSubscribe from "./SpaceSubscribe";
import SpaceSetting from "./SpaceSetting";
import {AndroidOutlined, AppleOutlined} from "@ant-design/icons";

const {Content}=Layout
const {TabPane} = Tabs
class SpaceContent extends Component {
    render() {
        return (
            <Content>
                <Tabs defaultActiveKey="1" style={{marginLeft: 15}}>
                    <TabPane tab={
                        <span><AppleOutlined />主页</span>
                    } key="1">
                        <SpaceHome/>
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
                </Tabs>
            </Content>
        );
    }
}

export default SpaceContent;