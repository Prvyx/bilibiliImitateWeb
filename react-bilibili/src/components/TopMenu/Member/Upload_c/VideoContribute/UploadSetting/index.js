import React, {Component} from 'react';
import cookie from 'react-cookies'
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
    Input,
    Collapse, Image
} from 'antd';
import { message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {BASE_URL} from "../../../../../../utils/url";
const { Option } = Select;
const { Panel } = Collapse;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};
// 下面的代码 ： 截取视频某一帧
const toThumbFile = blob => new File([blob], 'thumb__img.png')
// file为视频的文件对象，可使用 input[file] 进行获取
const loadVideo = function(file,frameNum) {
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
            // 设置videoElem的当前帧数
        videoElem.currentTime=frameNum;
        videoElem.src = dataUrl
    })
}

const getVideoDuration = function(file) {
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
class UploadSetting extends Component {
    state={loading: false,imgSrc:'',imgSrc1:'',imgSrc2:'',imgSrc3:'',imgSrc4:'',}
    componentDidMount() {
        if(this.props.videoFile!==undefined){
            const {videoFile}=this.props;
            getVideoDuration(videoFile).then(videoElem=>{
                this.setState({videoDuration:videoElem.duration},()=>{
                    // 获取视频文件时长后，进行视频某一帧的截取
                        // 创建canvasElem元素
                    const canvasElem = document.createElement('canvas')
                    const { videoWidth, videoHeight } =  videoElem
                    canvasElem.width = videoWidth
                    canvasElem.height = videoHeight
                    loadVideo(videoFile,0).then(videoElem => {

                        canvasElem.getContext('2d').drawImage(videoElem, 0, 0, videoWidth, videoHeight)
                        // 导出成blob文件
                        canvasElem.toBlob(blob => {
                            // 将blob文件转换成png File文件
                            const thumbFile = toThumbFile(blob)
                            // 将File文件 => state
                            this.setState({noInputImgFile:thumbFile})
                            this.setState({imgFile1:thumbFile})
                            console.log(thumbFile)
                            let imgTest=document.createElement('img')
                            imgTest.src=URL.createObjectURL(blob);
                            console.log(imgTest.src)
                            // document.getElementById("firstImg").src=URL.createObjectURL(blob)
                            // imgFile=thumbFile

                            // 将后面4个中的第一个以及需要上传的图片的src设为imgTest.src
                            this.setState({imgSrc1:imgTest.src,imgSrc:imgTest.src})
                        }, 'image/png')
                    })
                    loadVideo(videoFile,this.state.videoDuration/4).then(videoElem => {
                        canvasElem.getContext('2d').drawImage(videoElem, 0, 0, videoWidth, videoHeight)
                        // 导出成blob文件
                        canvasElem.toBlob(blob => {
                            // 将blob文件转换成png File文件
                            const thumbFile = toThumbFile(blob)
                            console.log(thumbFile)
                            this.setState({imgFile2:thumbFile})
                            let imgTest=document.createElement('img')
                            imgTest.src=URL.createObjectURL(blob);
                            console.log(imgTest.src)
                            // document.getElementById("firstImg").src=URL.createObjectURL(blob)
                            // imgFile=thumbFile
                            this.setState({imgSrc2:imgTest.src})
                        }, 'image/png')
                    })
                    loadVideo(videoFile,this.state.videoDuration/2).then(videoElem => {

                        canvasElem.getContext('2d').drawImage(videoElem, 0, 0, videoWidth, videoHeight)
                        // 导出成blob文件
                        canvasElem.toBlob(blob => {
                            // 将blob文件转换成png File文件
                            const thumbFile = toThumbFile(blob)
                            console.log(thumbFile)
                            this.setState({imgFile3:thumbFile})
                            let imgTest=document.createElement('img')
                            imgTest.src=URL.createObjectURL(blob);
                            console.log(imgTest.src)
                            // document.getElementById("firstImg").src=URL.createObjectURL(blob)
                            // imgFile=thumbFile
                            this.setState({imgSrc3:imgTest.src})
                        }, 'image/png')
                    })
                    loadVideo(videoFile,this.state.videoDuration-2).then(videoElem => {

                        canvasElem.getContext('2d').drawImage(videoElem, 0, 0, videoWidth, videoHeight)
                        // 导出成blob文件
                        canvasElem.toBlob(blob => {
                            // 将blob文件转换成png File文件
                            const thumbFile = toThumbFile(blob)
                            console.log(thumbFile)
                            this.setState({imgFile4:thumbFile})
                            let imgTest=document.createElement('img')
                            imgTest.src=URL.createObjectURL(blob);
                            console.log(imgTest.src)
                            // document.getElementById("firstImg").src=URL.createObjectURL(blob)
                            // imgFile=thumbFile
                            this.setState({imgSrc4:imgTest.src})
                        }, 'image/png')
                    })
                })

            })
        }
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    contributeSuccess=(e)=>{
        console.log(e)
        if(e.target.status===200){
            alert('投稿成功');
        }else {
            alert('投稿失败')
        }
    }
    contributeFail=(e)=>{
        console.log(e)
    }
    onFinish = (values) => {
        console.log(values)
        let form=new FormData();
        values.coverImg?form.append('coverImgFile',values.coverImg[0].originFileObj):
            form.append('coverImgFile',this.state.noInputImgFile)
        form.append('title',values.title)
        form.append('isOriginal',values.isOriginal)
        form.append('category',values.category)
        form.append('introduce',values.introduce)
        values.isAllowedToReprint!==undefined?form.append('isAllowedToReprint',values.isAllowedToReprint):
            form.append('isAllowedToReprint',false)
        form.append('userId',cookie.load('user_id'))
        form.append('ordinal',1)
        console.log(form.values())
        let xhr=new XMLHttpRequest();
        xhr.open('POST',BASE_URL+'/api/user/contribute/contributeVideo.ajax');
        xhr.onload=this.contributeSuccess
        xhr.onerror=this.contributeFail
        xhr.send(form);
    };
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <Form
                name="videoContribute"
                {...formItemLayout}
                onFinish={this.onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <span>基本设置</span>
                <Form.Item
                    name="coverImg"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    label="* 封面"
                    // rules={[
                    //     {
                    //         // required: true,
                    //     },
                    // ]}
                >
                    <Upload beforeUpload={()=>{return false;}} listType="picture" accept='image/*'
                            onChange={(info)=>{
                                this.setState({imgSrc:URL.createObjectURL(info.fileList[0].originFileObj)})
                            }}
                    >
                        <div style={{display:'inline-block',marginLeft:-100,paddingTop: 30,paddingBottom:30,border: '1px dashed red',width:190}}>
                            {
                                this.state.imgSrc?
                                    <Image
                                        style={{display:'inline-block',marginBottom: 20}}
                                        width='100%'
                                        src={this.state.imgSrc}
                                        preview={false}
                                    />:
                                    <div>
                                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                        <div style={{ marginTop: 8 }}>上传封面</div>
                                    </div>

                            }
                        </div>
                    </Upload>
                    <Image
                        style={{display:'inline-block',marginBottom: 20}}
                        width={100}
                        src={this.state.imgSrc1}
                        preview={false}
                        onClick={()=>{
                            this.setState({noInputImgFile:this.state.imgFile1,imgSrc:this.state.imgSrc1})
                        }}
                    />
                    <Image
                        style={{display:'inline-block',marginBottom: 20}}
                        width={100}
                        src={this.state.imgSrc2}
                        preview={false}
                        onClick={()=>{
                            this.setState({noInputImgFile:this.state.imgFile2,imgSrc:this.state.imgSrc2})
                        }}/>
                    <Image
                        style={{display:'inline-block',marginBottom: 20}}
                        width={100}
                        src={this.state.imgSrc3}
                        preview={false}
                        onClick={()=>{
                            this.setState({noInputImgFile:this.state.imgFile3,imgSrc:this.state.imgSrc3})
                        }}/>
                    <Image
                        style={{display:'inline-block',marginBottom: 20}}
                        width={100}
                        src={this.state.imgSrc4}
                        preview={false}
                        onClick={()=>{
                            this.setState({noInputImgFile:this.state.imgFile4,imgSrc:this.state.imgSrc4})
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="title"
                    label="标题"
                    rules={[
                        {
                            required: true,
                            message: '稿件标题不能为空',
                        },
                    ]}
                >
                    <Input style={{ width: 160 }} placeholder="请输入稿件标题" />
                </Form.Item>
                <Form.Item
                    name="isOriginal"
                    label="类型"
                    rules={[
                        {
                            required: true,
                            message: '请选择类型：自制or转载',
                            type: 'boolean',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={true}>自制</Radio>
                        <Radio value={false}>转载</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="category"
                    label="分区"
                    rules={[
                        {
                            required: true,
                            message: '请选择分区',
                        },
                    ]}
                >
                    <Select placeholder="请选择一个分区"
                            // defaultValue='life' value='life'
                            style={{width:200}}>
                        <Option value="life">生活</Option>
                        <Option value="game">游戏</Option>
                        <Option value="ent">娱乐</Option>
                        <Option value="knowledge">知识</Option>
                        <Option value="cinephile">影视</Option>
                        <Option value="music">音乐</Option>
                        <Option value="cartoon">动画</Option>
                        <Option value="fashion">时尚</Option>
                        <Option value="foods">美食</Option>
                        <Option value="car">汽车</Option>
                        <Option value="sports">运动</Option>
                        <Option value="tech">科技</Option>
                        <Option value="animals">动物圈</Option>
                        <Option value="dance">舞蹈</Option>
                        <Option value="guochuang">国创</Option>
                        <Option value="kichiku">鬼畜</Option>
                        <Option value="documentary">纪录片</Option>
                        <Option value="anime">番剧</Option>
                        <Option value="tv">电视剧</Option>
                        <Option value="movie">电影</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="introduce"
                    label="简介"
                >
                    <Input style={{ width: 600 }} placeholder="填写更全面的相关信息，让更多的人能找到你的视频吧"
                           showCount
                           maxLength={250}
                           size='small'
                    />
                </Form.Item>
                <Collapse bordered={false} expandIconPosition='right' style={{width:600}}>
                    <Panel header={<span>更多设置（含声明与权益、视频元素、互动管理等）</span>} key="1">
                        <span>声明与权益</span><br/>
                        <Form.Item
                            name="isAllowedToReprint"
                            label="自制声明"
                            valuePropName="checked"
                        >
                            {/*<span>未经作者授权 禁止转载</span>*/}
                            <Switch checkedChildren='未经作者授权 禁止转载' unCheckedChildren='允许转载' defaultChecked checked/>
                        </Form.Item>
                    </Panel>
                </Collapse>
                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 4,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        立即投稿
                    </Button>
                    <Button type="primary" style={{marginLeft:10}}>
                        保存模板
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default UploadSetting;