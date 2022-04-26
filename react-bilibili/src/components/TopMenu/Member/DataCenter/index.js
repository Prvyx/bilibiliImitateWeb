import React from 'react';
import {Col, Row, Tabs} from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const DataCenter = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="视频" key="1">
            <span>表现总结</span>
            <div>暂无数据</div>
            <span>核心数据概览</span>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    净增粉丝
                </Col>
                <Col span={6}>
                    播放量
                </Col>
                <Col span={6}>
                    评论
                </Col>
                <Col span={6}>
                    弹幕
                </Col>

                <Col span={6}>
                    点赞
                </Col>
                <Col span={6}>
                    分享
                </Col>
                <Col span={6}>
                    收藏
                </Col>
                <Col span={6}>
                    投币
                </Col>
            </Row>
        </TabPane>
        <TabPane tab="播放" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="观众" key="3">
            Content of Tab Pane 3
        </TabPane>
        <TabPane tab="专栏" key="4">
            Content of Tab Pane 3
        </TabPane>
    </Tabs>
);

export default DataCenter;