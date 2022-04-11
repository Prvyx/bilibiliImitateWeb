import React, {Component} from 'react';
import {Form, Layout} from "antd";
import SpaceHeader from "./SpaceHeader";
import SpaceContent from "./SpaceContent";
import SpaceSider from "./SpaceSider";
import axios from "axios";

class Space extends Component {
    state={}

    getUpBasicInfo=()=>{
        let _url='http://localhost:3000/api/user/UpBasicInfo.ajax'
        axios.post(_url,{userId:this.props.userId})
            .then(_d=>{
                if(_d.data.status===0){
                    const userBasicInfo=_d.data.data
                    const spaceHeaderProps={
                        userName:userBasicInfo.user_name,
                        grade:userBasicInfo.grade,
                        avatarImgPath:userBasicInfo.user_avatar_path,
                        signatureContent:userBasicInfo.signature_content,
                    }
                    const spaceContentProps={
                        userId:userBasicInfo.user_id
                    }
                    const spaceSiderProps={
                        userId:userBasicInfo.user_id,
                        followerNumber:userBasicInfo.follower_number,
                        fanNumber:userBasicInfo.fan_number,
                        thumbUpNumber:userBasicInfo.thumb_up_number,
                        playCount:userBasicInfo.play_count,
                        announceContent:userBasicInfo.announce_content,
                    }
                    this.setState({spaceHeaderProps:spaceHeaderProps,spaceContentProps:spaceContentProps,spaceSiderProps:spaceSiderProps})
                }else {
                    console.log('up信息加载失败')
                }
            })
    }
    componentDidMount() {
        this.getUpBasicInfo()
    }

    render() {
        return (
            <Form
                name="validate_other"
                {...this.formItemLayout}
                onFinish={this.onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <div style={{margin: '0 80px',backgroundColor:'green'}}>
                    <Layout>
                        <SpaceHeader spaceHeaderProps={this.state.spaceHeaderProps}/>
                        <Layout>
                            <SpaceContent userId={this.props.userId}/>
                            <SpaceSider spaceSiderProps={this.state.spaceSiderProps}/>
                        </Layout>
                    </Layout>
                </div>
            </Form>
        );
    }
}

export default Space;