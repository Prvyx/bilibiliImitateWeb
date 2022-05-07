import React, {Component} from 'react';
import {Button, Card, Descriptions, Divider, List,Layout,Input} from "antd";
const {Sider}=Layout
const {TextArea} =Input

class SpaceHomeSider extends Component {
    render() {
        const spaceHomeSiderProps=this.props.spaceHomeSiderProps
        const userId=spaceHomeSiderProps!==undefined?spaceHomeSiderProps.userId:'test'
        const announceContent=spaceHomeSiderProps!==undefined?spaceHomeSiderProps.announceContent:'test'
        return (
            <Sider width={'33%'} style={{backgroundColor: '#ffffff'}}>
                <div style={{margin:'0 20px'}}>
                    <div style={{marginTop: 90,border: '1px solid #f4f5f7'}}>
                        <span style={{padding: '15px'}}>公告</span>
                        <Divider style={{marginTop:5,marginBottom:5}}/>
                        <TextArea rows={8} placeholder={`编辑你的公告`} maxLength={150} style={{margin: '0 1px'}} value={announceContent}/>
                    </div>
                    <Descriptions title="个人资料" size={"middle"} extra={<Button type="link">修改资料</Button>}>
                        <Descriptions.Item span={2} label="UID">{userId}</Descriptions.Item>
                        <Descriptions.Item span={1} label="生日">01-01</Descriptions.Item>
                    </Descriptions>
                </div>

            </Sider>
        );
    }
}

export default SpaceHomeSider;