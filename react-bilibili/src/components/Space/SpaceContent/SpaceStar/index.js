import React, {Component} from 'react';
import {Card, Layout, List, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.css'
import axios from "axios";
import cookie from "react-cookies";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
const {Meta} = Card

class SpaceStar extends Component {
    state={}
    // 获取收藏夹列表
    getStarDirData=()=>{
        let _url='http://localhost:3000/api/user/starDir.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                console.log(_d.data)
                if(_d.data.status===0){
                    this.setState({category1List:_d.data.data.category1List,
                        category2List:_d.data.data.category2List,
                        category3List:_d.data.data.category3List
                    })
                }
            })
    }
    // 获取某个收藏夹的视频列表
    getVideoList(starDirId){
        let _url='http://localhost:3000/api/video/videoListByStarDirId.ajax'
        axios.post(_url,{userId:cookie.load('user_id'),starDirId:starDirId})
            .then(_d=>{
                console.log(_d.data)
                this.setState({videoListByStarDirId:_d.data.data})
            })
    }
    componentDidMount() {
        this.getStarDirData()
    }
    render() {
        let index=1;
        const videoListByStarDirId=this.state.videoListByStarDirId
        return (
            <Layout className="spaceStar">
                <Sider className="site-layout-background" width={150}>
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="我的创建">
                            {
                                (this.state.category1List||[]).map((starDirObj)=>{
                                    return (
                                        <Menu.Item key={`${index++}`} onClick={()=>{
                                            this.getVideoList(starDirObj.star_dir_id)
                                        }}>
                                            <span>{starDirObj.star_dir_title}</span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="我的收藏和订阅">
                            {
                                (this.state.category2List||[]).map((starDirObj)=>{
                                    return (
                                        <Menu.Item key={`${index++}`} onClick={()=>{
                                            this.getVideoList(starDirObj.star_dir_id)
                                        }}>
                                            <span>{starDirObj.star_dir_title}</span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="稍后再看">
                            {
                                (this.state.category3List||[]).map((starDirObj)=>{
                                    return (
                                        <Menu.Item key={`${index++}`} onClick={()=>{
                                            this.getVideoList(starDirObj.star_dir_id)
                                        }}>
                                            <span>{starDirObj.star_dir_title}</span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <List
                        grid={{ gutter: 8, column: 4 }}
                        dataSource={videoListByStarDirId}
                        renderItem={item => (
                            <List.Item key={item.video_id}>
                                <Card
                                    hoverable
                                    style={{ width: "100%" ,height:"100%"}}
                                    cover={
                                        <Link to={`/video/${item.video_id}`} target={'_blank'}>
                                            <img
                                                alt="example"
                                                src={item.video_img_path}
                                                style={{width:'100%',height:'100%',borderRadius:8}}
                                            />
                                        </Link>}
                                    size={"small"}
                                >
                                    <Meta
                                        title={<Link to={`/video/${item.video_id}`} target={'_blank'}>{item.video_title}</Link>}
                                        description={<a href="https://www.bilibili.com/" target={`_blank`}>收藏时间:{item.star_datetime}</a>}
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Content>
            </Layout>
        );
    }
}

export default SpaceStar;