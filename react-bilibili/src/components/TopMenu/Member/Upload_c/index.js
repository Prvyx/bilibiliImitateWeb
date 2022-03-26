import React, {Component} from 'react';
import {Button, Form, Tabs, Upload,message } from "antd";
import {InboxOutlined} from "@ant-design/icons";
import VideoUploadFrame from "./VideoUploadFrame";
const {TabPane}=Tabs
const { Dragger } = Upload;
class Upload_c extends Component {
    state={}
    properties = {
        name: 'video',
        multiple: true,
        action: 'http://localhost:3000/api/getVideoContribute.ajax',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
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
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="视频投稿" key="1">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                        <Dragger {...this.properties}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <Button key="primary">上传视频</Button>
                        </Dragger>
                    </Form.Item>
                    {
                        (()=>{
                            if(this.state.uploadSuccess!==undefined){
                                return (
                                    <VideoUploadFrame/>
                                )
                            }
                        })()
                    }
                </TabPane>
                <TabPane tab="专栏投稿" key="2">
                    专栏投稿
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
        );
    }
}

export default Upload_c;