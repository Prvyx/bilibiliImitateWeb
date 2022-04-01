import React, {Component} from 'react';
import {Button, Form, Input, Upload, Tabs, message, Image} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";
const {TabPane}=Tabs

let imgFile;
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
    action: 'http://localhost:3000/api/getVideoContribute.ajax',
    onChange(info) {
        console.log('11111')
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

    onFinish = (values) => {
        console.log(values);
        debugger
        let formData=new FormData()
        formData.append('videoContribute',values.videoContribute.file.originFileObj)
        formData.append('firstImg',imgFile)
        formData.append('title',values.title)
        formData.append('introduce',values.introduce)
        console.log(formData)
        let _url='http://localhost:3000/api/getVideoContribute.ajax'
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
            <Form onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}>
                <Form.Item name="videoContribute">
                    <Upload accept='video/*' customRequest={this.submitF} {...properties}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item name="firstImg">
                    <span>首页图片</span>
                    <img id='firstImg' width="auto" height="300px"/>
                </Form.Item>
                <Form.Item name="title">
                    <Input
                        prefix={`标题`}
                        style={{width:350}}
                    />
                </Form.Item>
                <Form.Item name="introduce">
                    <Input
                        prefix={`介绍`}
                        style={{width:350}}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default VideoContribute;