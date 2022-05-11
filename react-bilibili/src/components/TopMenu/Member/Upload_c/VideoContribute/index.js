import React, {Component} from 'react';
import {Button, Form, Input, Upload, Tabs, message, Checkbox,Select,Progress} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";
import cookie from 'react-cookies'
import {BASE_URL} from 'utils/url'
import UploadSetting from "./UploadSetting";

const { Option } = Select;
const { Dragger } = Upload;


class VideoContribute extends Component {
    state={alreadyInput:false,fileList:[],loading:0}
    uploadComplete=(e)=>{
        console.log("上传成功！", e);
    }
    uploadFailed=(e)=>{
        console.log("上传失败", e);
    }
    progressFunction=(e)=>{
        let loading = Math.round(e.loaded / e.total * 100);
        console.log("loading::", loading);
        this.setState({loading:loading})

        // if(loading === 100){
        //     loading_dom.innerHTML = "上传成功^_^";
        // }else{
        //     loading_dom.innerHTML = "上传进度"+loading+"%"
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // 为啥send后会刷新界面。。。我真的不理解呀
        if(prevState.fileList!==this.state.fileList){
            let file=this.state.fileList[0];
            if(file){
                let form=new FormData()
                form.append('videoFile',file)
                form.append("userId",cookie.load('user_id'));
                let xhr=new XMLHttpRequest()
                xhr.onload=this.uploadComplete
                xhr.onerror=this.uploadFailed
                xhr.upload.onprogress=this.progressFunction
                xhr.open('POST',BASE_URL+'/api/user/contribute/uploadVideo.ajax',true)
                xhr.send(form)
            }else {
                alert('选择文件后再上传')
            }
        }
    }

    render() {
        const props = {
            name: 'videoFile',
            multiple: false,
            accept:'video/mp4',
            data:{userId:cookie.load('user_id')},
            // action: BASE_URL+'/api/user/contribute/uploadVideo.ajax',
            onChange(info) {
                console.log(info.file, info.fileList);
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }

            },
            // 这种形式可以调用this.setState()
            beforeUpload: file => {
                this.setState({alreadyInput:true,fileList:[file]})
                return false;
            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };
        const {alreadyInput}=this.state;
        return (
            alreadyInput===false?(
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">拖拽到此处也可上传</p>
                    <p className="ant-upload-hint">
                        当前审核队列：快速
                    </p>
                </Dragger>
            ):(
                // <Upload {...props2} fileList={this.state.fileList} >
                //     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                // </Upload>
                // <Progress percent={50} status="active" />
                <div>
                    <Progress percent={this.state.loading} status="active" />
                    {
                        (()=>{
                            if (this.state.loading!==0){
                                return (
                                    <UploadSetting videoFile={this.state.fileList[0]}/>
                                )
                            }
                        })()
                    }
                </div>
            )
        )
    }
}

export default VideoContribute;