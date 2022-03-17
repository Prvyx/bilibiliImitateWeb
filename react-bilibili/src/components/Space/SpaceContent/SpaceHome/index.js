import React, {Component} from 'react';
import {InboxOutlined} from "@ant-design/icons";
import {Card, Divider, Form, List, Tabs, Upload} from "antd";
import MyVideo from "./MyVideo";
import MyColumn from "./MyColumn";
import MyList from "./MyList";
import MyStar from "./MyStar";
import MyCoinVideo from "./MyCoinVideo";
import MyThumbUpVideo from "./MyThumbUpVideo";
const {TabPane}=Tabs

class SpaceHome extends Component {

    // 自定义函数
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的粉丝会看到" key="1">
                        <Form.Item label="">
                            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">设置置顶视频</p>
                                </Upload.Dragger>
                            </Form.Item>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="新访客会看到" key="2">
                        <Form.Item label="">
                            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">设置代表作</p>
                                </Upload.Dragger>
                            </Form.Item>
                        </Form.Item>
                    </TabPane>
                </Tabs>
                <Divider/>
                <MyVideo/>
                <Divider/>
                <MyColumn/>
                <Divider/>
                <MyList/>
                <Divider/>
                <MyStar/>
                <Divider/>
                <MyCoinVideo/>
                <Divider/>
                <MyThumbUpVideo/>
                <Divider/>
            </div>
        );
    }
}

export default SpaceHome;