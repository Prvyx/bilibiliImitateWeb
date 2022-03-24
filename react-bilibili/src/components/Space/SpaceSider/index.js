import React, {Component} from 'react';
import {Button, Card, Descriptions, Divider, List, Layout, Input} from "antd";
const {Sider}=Layout
const { TextArea } = Input;

class SpaceSider extends Component {
    render() {
        const spaceSiderProps=this.props.spaceSiderProps

        const userId=spaceSiderProps!==undefined?spaceSiderProps.userId:'test'
        const followerNumber=spaceSiderProps!==undefined?spaceSiderProps.followerNumber:-1
        const fanNumber=spaceSiderProps!==undefined?spaceSiderProps.fanNumber:-1
        const thumbUpNumber=spaceSiderProps!==undefined?spaceSiderProps.thumbUpNumber:-1
        const playCount=spaceSiderProps!==undefined?spaceSiderProps.playCount:-1
        const announceContent=spaceSiderProps!==undefined?spaceSiderProps.announceContent:'test'

        const numberData = [
            {
                title: '关注数',
                numberData:followerNumber
            },
            {
                title: '粉丝数',
                numberData:fanNumber
            },
            {
                title: '获赞数',
                numberData:thumbUpNumber
            },
            {
                title: '播放数',
                numberData:playCount
            },
            {
                title: '阅读数',
                numberData:123
            },
        ];

        return (
            <Sider width={'33%'} style={{backgroundColor: '#ffffff'}}>
                <div style={{margin:'0 20px'}}>
                    <List
                        style={{height: 20}}
                        grid={{ gutter: 0, column: 5 }}
                        dataSource={numberData}
                        renderItem={item => (
                            <List.Item>
                                <Card headStyle={{fontSize:12}} bodyStyle={{height:32}} size={"small"} title={item.title} style={{fontSize: 12}}>{item.numberData}</Card>
                            </List.Item>
                        )}
                    />
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

export default SpaceSider;