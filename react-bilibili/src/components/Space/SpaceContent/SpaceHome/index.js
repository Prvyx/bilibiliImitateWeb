import React, {Component} from 'react';
import {InboxOutlined} from "@ant-design/icons";
import {Card, Col, Divider, Form, Image, List, Row, Tabs, Upload} from "antd";
import MyVideo from "./MyVideo";
import MyColumn from "./MyColumn";
import MyList from "./MyList";
import MyStar from "./MyStar";
import MyCoinVideo from "./MyCoinVideo";
import MyThumbUpVideo from "./MyThumbUpVideo";
import axios from "axios";
import cookie from 'react-cookies'
const {TabPane}=Tabs
const {Meta}=Card

class SpaceHome extends Component {
    state={}
    componentDidMount() {
        this.getTopVideo();
        this.getRepresentativeWork();
    }

    getTopVideo=()=>{
        let _url='http://localhost:3000/api/user/topVideo.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({topVideo:_d.data.data})
            })
    }
    getRepresentativeWork=()=>{
        let _url='http://localhost:3000/api/user/representativeWork.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                this.setState({representativeWork:_d.data.data})
            })
    }
    // 自定义函数
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
        const topVideo=this.state.topVideo||Object;
        const representativeWork=this.state.representativeWork||Object
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的粉丝会看到" key="1">
                        {
                            (()=>{
                               if(topVideo.video_id!==undefined){
                                   return (
                                       <Row>
                                           <Col span={8}>
                                               <Image src={topVideo.video_img_path} width="100%" height="auto"/>
                                           </Col>
                                           <Col span={15} style={{marginLeft:10}}>
                                               <Row style={{marginLeft: 10,marginBottom:10}}>
                                                   <span style={{fontSize:16}}>{topVideo.video_title}</span>
                                               </Row>
                                               <Row style={{marginBottom:10}}>
                                                   <Col span={4}>
                                                       <span>播放量:{topVideo.video_play_count}</span>
                                                   </Col>
                                                   <Col span={4}>
                                                       <span>弹幕量:{topVideo.video_barrage_count}</span>
                                                   </Col>
                                                   <Col span={10}>
                                                       <span>时间:{topVideo.video_datetime}</span>
                                                   </Col>
                                               </Row>
                                               <Row>
                                                   <span>{topVideo.introduce}</span>
                                               </Row>
                                           </Col>
                                       </Row>
                                   )
                               }else {
                                   return (
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
                                   )
                               }
                            })()
                        }
                    </TabPane>
                    <TabPane tab="新访客会看到" key="2">
                        {
                            (()=>{
                                if(representativeWork!==undefined){
                                    return (
                                        <Row>
                                            <Col span={8}>
                                                <Image src={representativeWork.video_img_path} width="100%" height="auto"/>
                                            </Col>
                                            <Col span={15} style={{marginLeft:10}}>
                                                <Row style={{marginLeft: 10,marginBottom:10}}>
                                                    <span style={{fontSize:16}}>{representativeWork.video_title}</span>
                                                </Row>
                                                <Row style={{marginBottom:10}}>
                                                    <Col span={4}>
                                                        <span>播放量:{representativeWork.video_play_count}</span>
                                                    </Col>
                                                    <Col span={4}>
                                                        <span>弹幕量:{representativeWork.video_barrage_count}</span>
                                                    </Col>
                                                    <Col span={10}>
                                                        <span>时间:{representativeWork.video_datetime}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <span>{representativeWork.introduce}</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                    )
                                }else {
                                    return (
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
                                    )
                                }
                            })()
                        }
                    </TabPane>
                </Tabs>
                <Divider/>
                <MyVideo userId={this.props.userId}/>
                <Divider/>
                <MyColumn/>
                <Divider/>
                <MyList/>
                <Divider/>
                <MyStar userId={this.props.userId}/>
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