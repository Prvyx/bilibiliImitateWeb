import React, {Component} from 'react';
import {FireOutlined} from '@ant-design/icons'
import {Row, Col, Menu} from 'antd';
import {Link} from 'react-router-dom'
import './index.css'
import CatalogCol from "./CatalogCol";
class Catalog extends Component {
    render() {
        return (
            <div id={`catalog`} className={`catalog`}>
                <Row justify="center">
                    {/*<Col span={1} className={`channel-icons`}></Col>*/}
                    <Col span={6} className={`channel-icons`}>
                        <Row  gutter={[0,8]} justify="center">
                            <Col span={5}>
                                <span>动态</span>
                            </Col>
                            <Col span={5}>
                                <FireOutlined/>
                                <span>热门</span>
                            </Col>
                            <Col span={5}>
                                <span>频道</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className={`channel-items__left`}>
                        <Row gutter={[45, 10]} justify="space-around">
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
                    <Col span={4} className={`channel-items__right`}>
                        <Row gutter={[25,8]} justify="center">
                            <Col span={2/3}>
                                专栏
                            </Col>
                            <Col span={2/3}>活动</Col>
                            <Col span={2/3}>社区中心</Col>

                            <Col span={2/3}>直播</Col>
                            <Col span={2/3}>课堂</Col>
                            <Col span={2/3}>新歌热榜</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Catalog;