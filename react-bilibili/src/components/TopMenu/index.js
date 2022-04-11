import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom'
import {Menu, Space, Input, Avatar, Image, Popover, Tabs, Layout, List, Card, Col, Row} from 'antd';
import BilibiliIcon from './Icon/BilibiliIcon'
import cookie from 'react-cookies'
// 路由
import Anime from '../../pages/Section/Anime'
import Live from '../../pages/Section/Live'
import Game from '../../pages/Section/Game'
import Vip_purchase from '../../pages/Section/Vip_purchase'
import Cartoon from '../../pages/Section/Cartoon'
import Competition from '../../pages/Section/Competition'
import Vip from '../../pages/Section/Vip'
import Message from '../../pages/Section/Message'
import Dynamic from '../../pages/Section/Dynamic'
import Favorite from '../../pages/Section/Favorite'
import History from '../../pages/Section/History'
import Writing_center from '../../pages/Section/Writing_center'
import Upload from '../../pages/Section/MemberPage'


import './index.css'
import UserAvatar from "./UserAvatar";
import {UserOutlined} from "@ant-design/icons";
import axios from "axios";
const { Search } = Input;
const { TabPane } = Tabs;
const {Sider,Content}=Layout
const {Meta}=Card
const onSearch = value => {};
class TopMenu extends Component {
    state = {
        current: 'mail',
    };
    componentDidMount() {
        this.getStarDirs()
        this.getWatchHistoryList()
    }
    // 获取收藏夹列表
    getStarDirs=()=>{
        let _url='http://localhost:3000/api/user/starDir.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                if(_d.data.status===0){
                    this.setState({category1List:_d.data.data.category1List})
                }
            })
    }
    // 获取某个收藏夹的视频列表
    getVideoList(starDirId){
        let _url='http://localhost:3000/api/video/videoListByStarDirId.ajax'
        axios.post(_url,{userId:cookie.load('user_id'),starDirId:starDirId})
            .then(_d=>{
                this.setState({videoListByStarDirId:_d.data.data})
            })
    }

    // 拉取某个用户的观看视频的历史记录
    getWatchHistoryList=()=>{
        let _url='http://localhost:3000/api/user/watchVideoHistory.ajax'
        axios.post(_url,{userId:cookie.load('user_id')})
            .then(_d=>{
                console.log(_d.data.data)
                if(_d.data.status===0){
                    this.setState({userWatchHistoryList:_d.data.data})
                }
            })
    }

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div className={`top_menu`}>
                <Menu className={`navMenu`} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Space size="small">
                        <Menu.Item key="index"  icon={<BilibiliIcon/>} >
                            <Link to={`/`}>首页</Link>
                        </Menu.Item>
                        <Menu.Item key="anime">
                            <NavLink to={`/anime`} target={`_blank`}>番剧</NavLink>
                        </Menu.Item>
                        <Menu.Item key="live">
                            <NavLink to={`/live`} target={`_blank`}>直播</NavLink>
                        </Menu.Item>
                        <Menu.Item key="game">
                            <NavLink to={`/game`} target={`_blank`}>游戏中心</NavLink>
                        </Menu.Item>
                        <Menu.Item key="vip_purchase">
                            <NavLink to={`/vip_purchase`} target={`_blank`}>会员购</NavLink>
                        </Menu.Item>
                        <Menu.Item key="cartoon">
                            <NavLink to={`/cartoon`} target={`_blank`}>漫画</NavLink>
                        </Menu.Item>
                        <Menu.Item key="competition">
                            <NavLink to={`/competition`} target={`_blank`}>赛事</NavLink>
                        </Menu.Item>
                        <li className={`top-menu-input`}>
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </li>
                        <Menu.Item key="user" style={{marginLeft: 30}}>
                            <UserAvatar/>
                        </Menu.Item>
                        <Popover content={(
                            <div>大会员</div>
                        )} title="大会员">
                            <Menu.Item key="vip">
                                <NavLink to={`/vip`} target={`_blank`}>大会员</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <div>消息</div>
                        )} title="消息">
                            <Menu.Item key="message">
                                <NavLink to={`/message`} target={`_blank`}>消息</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <div>动态</div>
                        )} title="动态">
                            <Menu.Item key="dynamic">
                                <NavLink to={`/dynamic`} target={`_blank`}>动态</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <Tabs tabPosition='left' style={{marginLeft:-20}} onChange={(key)=>{
                                this.getVideoList(key)
                            }}>
                                {
                                    (this.state.category1List||[]).map((starDirObj)=>{
                                        return (
                                            <TabPane tab={
                                                <div style={{width:80,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                                                    {starDirObj.star_dir_title}
                                                </div>
                                            } key={starDirObj.star_dir_id}>
                                                <List
                                                    style={{width:200}}
                                                    grid={{ gutter: 0, column: 1 }}
                                                    dataSource={this.state.videoListByStarDirId||[]}
                                                    renderItem={item => (
                                                        <List.Item key={item.video_id}>
                                                            <Row>
                                                                <Col span={10}>
                                                                    <Image src={item.video_img_path} width="auto" height="50px"/>
                                                                </Col>
                                                                <Col span={12} style={{marginLeft:10}}>
                                                                    <Row style={{marginBottom:10}}>
                                                                        <span style={{fontSize:14}}>{item.video_title}</span>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col span={8}>
                                                                            <span style={{fontSize:12}}>{item.user_name}</span>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </List.Item>
                                                    )}
                                                />
                                            </TabPane>
                                        )
                                    })
                                }
                            </Tabs>
                        )}>
                            <Menu.Item key="favorite">
                                <NavLink to={`/favorite`} target={`_blank`}>收藏</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <List
                                style={{width:300}}
                                grid={{ gutter: 0, column: 1 }}
                                dataSource={this.state.userWatchHistoryList||[]}
                                renderItem={item => (
                                    <List.Item key={item.video_id}>
                                        <Row>
                                            <Col span={10}>
                                                <Image src={item.video_img_path} width="auto" height="60px"/>
                                            </Col>
                                            <Col span={12} style={{marginLeft:10}}>
                                                <Row>
                                                    <span style={{fontSize:14}}>{item.video_title}</span>
                                                </Row>
                                                <span style={{fontSize:12}}>{item.watch_datetime}</span>
                                                <br/>
                                                <span style={{fontSize:12}}>{item.user_name}</span>
                                            </Col>
                                        </Row>
                                    </List.Item>
                                )}
                            />
                        )}>
                            <Menu.Item key="history">
                                <NavLink to={`/history`} target={`_blank`}>历史</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <div>创作中心</div>
                        )} title="创作中心">
                            <Menu.Item key="writing-center">
                                <NavLink to={`/writing_center`} target={`_blank`}>创作中心</NavLink>
                            </Menu.Item>
                        </Popover>
                        <Popover content={(
                            <div>投稿</div>
                        )} title="投稿">
                            <Menu.Item key="upload">
                                <NavLink to={`/member`} target={`_blank`}>投稿</NavLink>
                            </Menu.Item>
                        </Popover>
                    </Space>
                </Menu>
            </div>
        );
    }
}

export default TopMenu;