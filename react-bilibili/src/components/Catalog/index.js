import React, {Component} from 'react';
import {FireOutlined} from '@ant-design/icons'
import {Row, Col} from 'antd';
import {Link, NavLink} from 'react-router-dom'
import './index.css'
import CatalogCol from "./CatalogCol";
import MessageIcon from "../TopMenu/Icon/MessageIcon";
import DynamicIcon from "./Icon/DynamicIcon";
import HotIcon from "./Icon/HotIcon";
import ChannelIcon from "./Icon/ChannelIcon";
import ColumnIcon from "./Icon/ColumnIcon";
import ClassroomIcon from "./Icon/ClassroomIcon";
import NewSong from "./Icon/Newsong";
import ActivityIcon from "./Icon/ActivityIcon";
import CommunityIcon from "./Icon/CommunityIcon";
import LiveIcon from "./Icon/LiveIcon";
class Catalog extends Component {
    render() {
        return (
            <div id={`catalog`} className={`catalog`}>
                <Row justify="center">
                    {/*<Col span={1} className={`channel-icons`}></Col>*/}
                    <Col span={5} className={`channel-icons`} style={{marginLeft:-70}}>
                        <Row  gutter={[0,8]} justify="center">
                            <Col span={5}>
                                <NavLink to={`/dynamic`} target={`_blank`}>
                                    <div style={{marginLeft:13,width:40,height:40,borderRadius:20,backgroundColor:'#ff9212'}}>
                                        <DynamicIcon style={{marginTop:8,marginLeft:2}}/>
                                    </div>
                                    <div style={{height:10}}>
                                        <span>动态</span>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col span={5}>
                                <NavLink to={`/hot`} target={`_blank`}>
                                    <div style={{marginLeft:13,width:40,height:40,borderRadius:20,backgroundColor:'#f07775'}}>
                                        <HotIcon style={{marginTop:8,marginLeft:2}}/>
                                    </div>
                                    <div style={{height:10}}>
                                        <span>热门</span>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col span={5}>
                                <NavLink to={`/channel`} target={`_blank`}>
                                    <div style={{marginLeft:12,width:40,height:40,borderRadius:20,backgroundColor:'#59ca73'}}>
                                        <ChannelIcon style={{marginTop:8,marginLeft:2}}/>
                                    </div>
                                    <div style={{height:10}}>
                                        <span>频道</span>
                                    </div>
                                </NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className={`channel-items__left`}>
                        <Row gutter={[45, 12]} justify="space-around">
                            <CatalogCol>
                                <Link to={`/anime`} target={`_blank`}>番剧</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/guochuang`} target={`_blank`}>国创</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/variety`} target={`_blank`}>综艺</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/cartoon`} target={`_blank`}>动画</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/documentary`} target={`_blank`}>纪录片</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/dance`} target={`_blank`}>舞蹈</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/ent`} target={`_blank`}>娱乐</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/tech`} target={`_blank`}>科技</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/foods`} target={`_blank`}>美食</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/movie`} target={`_blank`}>电影</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/music`} target={`_blank`}>音乐</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/kichiku`} target={`_blank`}>鬼畜</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/game`} target={`_blank`}>游戏</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/tv`} target={`_blank`}>电视剧</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/cinephile`} target={`_blank`}>影视</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/knowledge`} target={`_blank`}>知识</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/information`} target={`_blank`}>资讯</Link>
                            </CatalogCol>
                            <CatalogCol>
                                <Link to={`/more`} target={`_blank`}>更多</Link>
                            </CatalogCol>
                        </Row>
                    </Col>
                    <Col span={5} className={`channel-items__right`} style={{marginLeft:50,borderLeft:'1px solid #e3e5e7'}}>
                        <Row gutter={[1,8]} justify="center">
                            <Col span={8}>
                                <div><ColumnIcon/><span>专栏</span></div>
                            </Col>
                            <Col span={8}>
                                <ActivityIcon/><span>活动</span>
                            </Col>
                            <Col span={8}>
                                <CommunityIcon/><span>社区中心</span>
                            </Col>
                            <Col span={8}>
                                <LiveIcon/><span>直播</span>
                            </Col>
                            <Col span={8}>
                                <ClassroomIcon/><span>课堂</span>
                            </Col>
                            <Col span={8}>
                                <NewSong/><span>新歌热榜</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Catalog;