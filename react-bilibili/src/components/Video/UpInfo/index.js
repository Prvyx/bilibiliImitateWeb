import React, {Component} from 'react';
import {Avatar, Button, Image, Popover} from "antd";
import { Row, Col } from 'antd';
import axios from "axios";
import cookie from 'react-cookies'
import {BASE_URL} from "../../../utils/url";

class UpInfo extends Component {
    state={}
    getIsFocus=()=>{
        axios.post(BASE_URL+'/api/user/focus/isFocus.ajax',{userId:cookie.load('user_id'),otherUserId:this.props.otherUserId})
            .then(_d=>{
                if(_d.data.status===0){
                    this.setState({isFocus:true})
                }else {
                    this.setState({isFocus:false})
                }
            })
    }
    componentDidMount() {
        this.getIsFocus()
    }

    render() {
        const otherUserId=this.props.otherUserId;
        return (
            <Row>
                <Col flex="100px" style={{backgroundColor: ""}}>
                    <div style={{marginLeft: 5}}>
                        <Avatar size={64} src={<Image preview={false}
                                                      src={this.props.userAvatarPath}
                                                      style={{ width: 50 ,borderRadius: 25}} />} />
                    </div>
                </Col>
                <Col flex="auto">
                    <div style={{textAlign:"left",height:"50%"}}><span>{this.props.name}</span></div>
                    <div style={{textAlign:"left",height:"50%"}}>
                        <Button style={{borderRadius: 5}}>充电</Button>
                        {
                            (()=>{
                                if(this.state.isFocus===false){
                                    return (
                                        <Button style={{borderRadius:5}}
                                                onClick={()=>{
                                            axios.post(BASE_URL+'/api/user/focus/userFocus.ajax',{userId:cookie.load('user_id'),focusUserId:otherUserId,isFocus:true})
                                                .then(_d=>{
                                                    if(_d.data.status===0){
                                                        this.setState({isFocus:true})
                                                    }
                                                })
                                        }}>+关注 {}</Button>
                                    )
                                }else {
                                    return (
                                        <Popover content={(
                                            <div>
                                                <Button type='link'>设置分组</Button><br/>
                                                <Button type='link'
                                                        onClick={()=>{
                                                    axios.post(BASE_URL+'/api/user/focus/userFocus.ajax',{userId:cookie.load('user_id'),focusUserId:otherUserId,isFocus:false})
                                                        .then(_d=>{
                                                            if(_d.data.status===0){
                                                                this.setState({isFocus:false})
                                                            }
                                                        })
                                                }}>取消关注</Button>
                                            </div>
                                        )}>
                                            <Button style={{borderRadius:5}}>已关注</Button>
                                        </Popover>
                                    )
                                }
                            })()
                        }
                    </div>
                </Col>
            </Row>
        );
    }
}

export default UpInfo;