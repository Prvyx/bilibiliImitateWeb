import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.css'
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

class SpaceStar extends Component {
    render() {
        return (
            <Layout className="spaceStar">
                <Sider className="site-layout-background" width={150}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="我的创建">
                            <Menu.Item key="1">
                                <Link to={`/`}>默认收藏夹</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={`/`}>Git</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link>Mock的理解以及运作流程</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link>Python</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="我的收藏和订阅">
                            <Menu.Item key="5">奸商套路分享</Menu.Item>
                            <Menu.Item key="6">钢琴 最美的语言</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="稍后再看">
                            <Menu.Item key="9">稍后再看1</Menu.Item>
                            <Menu.Item key="10">稍后再看2</Menu.Item>
                            <Menu.Item key="11">稍后再看3</Menu.Item>
                            <Menu.Item key="12">稍后再看4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
        );
    }
}

export default SpaceStar;