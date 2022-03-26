import React, {Component} from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Complaint = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="全部" key="1">
            Content of Tab Pane 1
        </TabPane>
        <TabPane tab="进行中" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="已完成" key="3">
            Content of Tab Pane 3
        </TabPane>
    </Tabs>
);

export default Complaint;