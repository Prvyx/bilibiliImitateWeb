import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom'
import { Menu ,Space,Input ,Avatar, Image} from 'antd';
import BilibiliIcon from './Icon/BilibiliIcon'
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
const { Search } = Input;
const onSearch = value => {};
class TopMenu extends Component {
    state = {
        current: 'mail',
    };

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
                        <Menu.Item key="vip">
                            <NavLink to={`/vip`} target={`_blank`}>大会员</NavLink>
                        </Menu.Item>
                        <Menu.Item key="message">
                            <NavLink to={`/message`} target={`_blank`}>消息</NavLink>
                        </Menu.Item>
                        <Menu.Item key="dynamic">
                            <NavLink to={`/dynamic`} target={`_blank`}>动态</NavLink>
                        </Menu.Item>
                        <Menu.Item key="favorite">
                            <NavLink to={`/favorite`} target={`_blank`}>收藏</NavLink>
                        </Menu.Item>
                        <Menu.Item key="history">
                            <NavLink to={`/history`} target={`_blank`}>历史</NavLink>
                        </Menu.Item>
                        <Menu.Item key="writing-center">
                            <NavLink to={`/writing_center`} target={`_blank`}>创作中心</NavLink>
                        </Menu.Item>
                        <Menu.Item key="upload">
                            <NavLink to={`/member`} target={`_blank`}>投稿</NavLink>
                        </Menu.Item>
                    </Space>
                </Menu>
            </div>
        );
    }
}

export default TopMenu;