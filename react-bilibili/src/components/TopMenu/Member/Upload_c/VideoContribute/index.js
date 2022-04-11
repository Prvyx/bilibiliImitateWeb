import React, {Component} from 'react';
import {Button, Form, Input, Upload, Tabs, message, Checkbox,Select} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";
import cookie from 'react-cookies'
const { Option } = Select;
let imgFile;
function handleChange(value) {
    console.log(`selected ${value}`);
}
const toThumbFile = blob => new File([blob], 'thumb__img.png')
// file为视频的文件对象，可使用 input[file] 进行获取
const loadVideo = function(file) {
    return new Promise(function(resolve, reject) {
        const videoElem = document.createElement('video')
        const dataUrl = URL.createObjectURL(file)
        // 当前帧的数据是可用的
        videoElem.onloadeddata = function() {
            resolve(videoElem)
        }
        videoElem.onerror = function() {
            reject('video 后台加载失败')
        }
        // 设置 auto 预加载数据， 否则会出现截图为黑色图片的情况
        videoElem.setAttribute('preload', 'auto')
        videoElem.src = dataUrl
    })
}
const properties = {
    name: 'videoContributeForm',
    // action: 'http://localhost:3000/api/getVideoContribute.ajax',
    maxCount:1,
    onChange(info) {
        console.log(info.file.name)
        document.getElementById("title").value=info.file.name.substr(0,info.file.name.lastIndexOf('.'));
        loadVideo(info.file.originFileObj).then(videoElem => {
            const canvasElem = document.createElement('canvas')
            const { videoWidth, videoHeight } =  videoElem
            canvasElem.width = videoWidth
            canvasElem.height = videoHeight
            canvasElem.getContext('2d').drawImage(videoElem, 0, 0, videoWidth, videoHeight)
            // 导出成blob文件
            canvasElem.toBlob(blob => {
                // 将blob文件转换成png文件
                const thumbFile = toThumbFile(blob)
                console.log(thumbFile)
                document.getElementById("firstImg").src=URL.createObjectURL(blob)
                imgFile=thumbFile
            }, 'image/png')
        })

        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onSuccess(){
        console.log('haha')
    },
    progress: {
        strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
class VideoContribute extends Component {
    // 提交表单
    onFinish = (values) => {
        // console.log(values)
        let formData=new FormData()
        formData.append('videoContribute',values.videoContribute.file.originFileObj)
        formData.append('firstImg',imgFile)
        formData.append('title',values.title||document.getElementById("title").value)
        formData.append('introduce',values.introduce)
        formData.append('category',values.category)
        formData.append('forwardPermission',values.forwardPermission||false)
        formData.append('userId',cookie.load('user_id'))
        console.log(formData)
        let _url='http://localhost:3000/api/user/contribute/getVideoContribute.ajax'
        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        axios.post(_url,formData)
            .then(_d=>{
                console.log(_d.data)
            })
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    submitF=()=>{

    }


    render() {
        return (
            <Form ref={this.formRef} onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}>
                <Form.Item name="videoContribute">
                    <Upload accept='video/*' customRequest={this.submitF} {...properties}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <span>首页图片</span>
                <Form.Item name="firstImg">
                    <img id='firstImg' width="auto" height="120px"/>
                </Form.Item>
                <Form.Item name="title">
                    <Input
                        prefix={`标题`}
                        style={{width:350}}
                        id="title"
                    />
                </Form.Item>
                <Form.Item name="introduce">
                    <Input
                        prefix={`介绍`}
                        style={{width:350}}
                    />
                </Form.Item>
                <Form.Item name="category">
                    <Select style={{ width: 120 }}>
                        <Option value="living">生活</Option>
                        <Option value="anime">番剧</Option>
                        <Option value="cartoon">动画</Option>
                        <Option value="competition">赛事</Option>
                        <Option value="dance">舞蹈</Option>
                        <Option value="foods">美食</Option>
                        <Option value="game">游戏</Option>
                        <Option value="knowledge">游戏</Option>
                        <Option value="live">直播</Option>
                        <Option value="music">音乐</Option>
                        <Option value="sports">运动</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="forwardPermission">
                    <Checkbox id="forwardPermission" onChange={(e)=>{
                        this.formRef.current.setFieldsValue({forwardPermission:e.target.checked})
                    }}>允许转载</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        投稿
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default VideoContribute;