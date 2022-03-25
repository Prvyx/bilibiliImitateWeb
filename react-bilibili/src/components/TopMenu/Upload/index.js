import React, {Component} from 'react';
import Catalog from "../../../components/Catalog";
import {Button, Card, Layout, List, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import UploadHome from "./UploadHome";
import Manuscript from "./UploadManager/Manuscript";
import Complaint from "./UploadManager/Complaint";
import Caption from "./UploadManager/Caption";

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
const {Meta} = Card
class Upload extends Component {
    render() {
        let index=1;
        return (
            <Layout>
                <Sider width={150}>
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Button type="primary" style={{marginLeft:25,width:'80%'}}>投稿</Button>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="首页">
                            <Link to={`/upload/home`}>首页</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<LaptopOutlined />} title={<Link to={`/upload/uploadManger`}>内容管理</Link>}>
                            <Menu.Item key={`${index++}`}>
                                <Link to={`/upload/uploadManger/manuscript`}>稿件管理</Link>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <Link to={`/upload/uploadManger/complaint`}>申诉管理</Link>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <Link to={`/upload/uploadManger/caption`}>字幕管理</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="数据中心">
                            <span>数据中心</span>
                        </Menu.Item>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="粉丝管理">
                            <span>粉丝管理</span>
                        </Menu.Item>
                        <SubMenu key="sub2" icon={<NotificationOutlined />} title="互动管理">
                            <Menu.Item key={`${index++}`}>
                                <span>评论管理</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>弹幕管理</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="收益管理">
                            <Menu.Item key={`${index++}`}>
                                <span>创作激励</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>充电计划</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>悬赏计划</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>花火平台</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<NotificationOutlined />} title="创作成长">
                            <Menu.Item key={`${index++}`}>
                                <span>任务成就</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>创作学院</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<NotificationOutlined />} title="创作权益">
                            <Menu.Item key={`${index++}`}>
                                <span>版权保护</span>
                            </Menu.Item>
                            <Menu.Item key={`${index++}`}>
                                <span>bilibili认证</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="创作实验室">
                            <span>创作实验室</span>
                        </Menu.Item>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="创作公约">
                            <span>创作公约</span>
                        </Menu.Item>
                        <Menu.Item key={`${index++}`} icon={<LaptopOutlined />} title="创作设置">
                            <span>创作设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 60px', minHeight: 280 }}>
                    <Switch>
                        <Route path={`/upload/home`} component={UploadHome}/>
                        <Switch>
                            <Route path={`/upload/uploadManger/manuscript`} component={Manuscript}/>
                            <Route path={`/upload/uploadManger/complaint`} component={Complaint}/>
                            <Route path={`/upload/uploadManger/caption`} component={Caption}/>
                            <Redirect to={`/upload/uploadManger/manuscript`}/>
                        </Switch>
                        {/*编写 “数据中心”的路由-2022.3.26白天*/}

                        <Redirect to={`/upload/home`}/>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default Upload;