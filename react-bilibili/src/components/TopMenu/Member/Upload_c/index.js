import React, {Component} from 'react';
import {Button, Form, Tabs, Upload, message, Input, Space} from "antd";

import {InboxOutlined,UploadOutlined} from "@ant-design/icons";
import VideoUploadFrame from "./VideoUploadFrame";
import VideoContribute from "./VideoContribute";
import cookie from "react-cookies";
import {BASE_URL} from 'utils/url'

const {TabPane}=Tabs
const { Dragger } = Upload;

class Upload_c extends Component {
    state={}

    callback=(key)=> {
        console.log(key);
    }
    normFile = (e) => {
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
        const props = {
            name: 'videoFile',
            multiple: false,
            accept:'video/mp4',
            data:{userId:cookie.load('user_id')},
            action: BASE_URL+'/api/user/contribute/uploadVideo.ajax',
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }

            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="视频投稿" key="1">
                    <VideoContribute/>
                </TabPane>
                <TabPane tab="专栏投稿" key="2">
                    专栏投稿
                    <Upload {...props} >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </TabPane>
                <TabPane tab="互动视频投稿" key="3">
                    <Form.Item label="">
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <Button type="primary">上传视频</Button>
                                <p>当前审核队列 快速</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </TabPane>
                <TabPane tab="音频投稿" key="4">
                    音频投稿
                </TabPane>
                <TabPane tab="贴纸投稿" key="5">
                    <Form.Item label="">
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <span>贴纸尺寸：750*750px 贴纸大小：单张5MB内</span>
                                <br/>
                                <span>贴纸数量：单次上传最多20张 贴纸格式：JPG/PNG/GIF/WEBP</span>
                                <Button type="primary">上传贴纸</Button>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </TabPane>
                <TabPane tab="视频素材投稿" key="6">
                    <Form.Item label="">
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <Button type="primary">上传视频素材</Button>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </TabPane>
            </Tabs>
        )
    }
}

export default Upload_c;