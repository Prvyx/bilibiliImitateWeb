import React, {Component} from 'react';
import {Button, Card, Descriptions, Divider, List, Layout, Input} from "antd";
const {Sider}=Layout
const { TextArea } = Input;

const data3 = [
    {
        title: '关注数',
    },
    {
        title: '粉丝数',
    },
    {
        title: '获赞数',
    },
    {
        title: '播放数',
    },
    {
        title: '阅读数'
    },
];

class SpaceSider extends Component {
    render() {
        return (
            <Sider width={'33%'} style={{backgroundColor: '#ffffff'}}>
                <div style={{margin:'0 20px'}}>
                    <List
                        style={{height: 20}}
                        grid={{ gutter: 0, column: 5 }}
                        dataSource={data3}
                        renderItem={item => (
                            <List.Item>
                                <Card headStyle={{fontSize:12}} bodyStyle={{height:32}} size={"small"} title={item.title} style={{fontSize: 12}}>123</Card>
                            </List.Item>
                        )}
                    />
                    <div style={{marginTop: 90,border: '1px solid #f4f5f7'}}>
                        <span style={{padding: '15px'}}>公告</span>
                        <Divider style={{marginTop:5,marginBottom:5}}/>
                        <TextArea rows={8} placeholder="编辑我的空间公告" maxLength={150} style={{margin: '0 1px'}}/>
                    </div>
                    <Descriptions title="个人资料" size={"middle"} extra={<Button type="link">修改资料</Button>}>

                        <Descriptions.Item span={2} label="UID">586422828</Descriptions.Item>
                        <Descriptions.Item span={1} label="生日">01-01</Descriptions.Item>
                    </Descriptions>
                </div>

            </Sider>
        );
    }
}

export default SpaceSider;