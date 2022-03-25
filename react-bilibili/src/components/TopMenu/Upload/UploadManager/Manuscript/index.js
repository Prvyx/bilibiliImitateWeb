import React, {Component} from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Manuscript = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="视频管理" key="1">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部稿件" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="进行中" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已通过" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="未通过" key="4">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </TabPane>
        <TabPane tab="专栏管理" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="互动视频管理" key="3">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部稿件" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="进行中" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已通过" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="未通过" key="4">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </TabPane>
        <TabPane tab="音频管理" key="4">
            Content of Tab Pane
        </TabPane>
        <TabPane tab="贴纸管理" key="5">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部贴纸" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="进行中" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已通过" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="未通过" key="4">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </TabPane>
        <TabPane tab="视频素材管理" key="6">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部视频素材" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="进行中" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已通过" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="未通过" key="4">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </TabPane>
    </Tabs>
);

export default Manuscript;