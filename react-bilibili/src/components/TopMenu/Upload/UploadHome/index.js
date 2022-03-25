import React, {Component} from 'react';
import { Tabs,Row,Col } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const UploadHome = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="视频数据" key="1">
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
        <TabPane tab="专栏数据" key="2">
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
    </Tabs>
);

export default UploadHome;