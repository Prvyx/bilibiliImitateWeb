import React, {Component} from 'react';
import {Button, Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined} from "@ant-design/icons";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import MemberHome from "./MemberHome";
import Upload_c from './Upload_c'
import Manuscript from "./MemberManger/Manuscript";
import Complaint from "./MemberManger/Complaint";
import Caption from "./MemberManger/Caption";
import DataCenter from "./DataCenter";
import Fans from "./Fans";
import Comment from "./Interaction/Comment";
import Barrage from "./Interaction/Barrage";
import PickUp from "./Earnings/PickUp";
import TaskManage from "./GrowingUp/TaskManage";
import Academy from "./GrowingUp/Academy";
import CreateProtect from "./MyRights/CreateProtect";
import Treaty from "./Treaty";
import Excitation from "./Earnings/Excitation";
import Charge from "./Earnings/Charge";
import MutualUp from "./Earnings/MutualUp";
import OfficialCertification from "./MyRights/OfficialCertification";
import Laboratory from "./Laboratory";
import Setting from "./Setting";
import cookie from 'react-cookies'


const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
class member extends Component {
    render() {
        return (
            <>
                {
                    (()=>{
                        if(cookie.load('user_id')===undefined){
                            return (
                                <span>Please Login</span>
                            )
                        }else {
                            return  (
                                <Layout>
                                    <Sider width={150}>
                                        <Menu
                                            mode="inline"
                                            defaultSelectedKeys={['1']}
                                            // defaultOpenKeys={['1']}
                                            style={{ height: '100%' }}
                                        >
                                            <Menu.Item key="0" style={{backgroundColor:"#ffffff"}}>
                                                <Button type="primary" style={{width:'100%'}}>
                                                    <Link to={`/member/upload`}>??????</Link>
                                                </Button>
                                            </Menu.Item>
                                            <Menu.Item key="1" icon={<LaptopOutlined />} title="??????">
                                                <Link to={`/member/home`}>??????</Link>
                                            </Menu.Item>
                                            <SubMenu key="sub1" icon={<LaptopOutlined />} title={<Link style={{color:"black"}} to={`/member/memberManger`}>????????????</Link>}>
                                                <Menu.Item key={`21`}>
                                                    <Link to={`/member/memberManger/manuscript`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`22`}>
                                                    <Link to={`/member/memberManger/complaint`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`23`}>
                                                    <Link to={`/member/memberManger/caption`}>????????????</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <Menu.Item key={`3`} icon={<LaptopOutlined />} title="????????????">
                                                <Link to={`/member/dataCenter`}>????????????</Link>
                                            </Menu.Item>
                                            <Menu.Item key={`4`} icon={<LaptopOutlined />} title="????????????">
                                                <Link to={`/member/fans`}>????????????</Link>
                                            </Menu.Item>
                                            <SubMenu key="sub2" icon={<NotificationOutlined />} title={<Link style={{color:"black"}} to={`/member/interaction`}>????????????</Link>}>
                                                <Menu.Item key={`51`}>
                                                    <Link to={`/member/interaction/comment`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`52`}>
                                                    <Link to={`/member/interaction/barrage`}>????????????</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <SubMenu key="sub3" icon={<NotificationOutlined />} title={<Link style={{color:"black"}} to={`/member/earnings`}>????????????</Link>}>
                                                <Menu.Item key={`61`}>
                                                    <Link to={`/member/earnings/excitation`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`62`}>
                                                    <Link to={`/member/earnings/charge`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`63`}>
                                                    <Link to={`/member/earnings/mutual_up`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`64`}>
                                                    <Link to={`/member/earnings/pick_up`}>????????????</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <SubMenu key="sub4" icon={<NotificationOutlined />} title={<Link style={{color:"black"}} to={`/member/growingUp`}>????????????</Link>}>
                                                <Menu.Item key={`71`}>
                                                    <Link to={`/member/growingUp/taskManage`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`72`}>
                                                    <Link to={`/member/growingUp/academy`}>????????????</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <SubMenu key="sub5" icon={<NotificationOutlined />} title={<Link style={{color:"black"}} to={`/member/my-rights`}>????????????</Link>}>
                                                <Menu.Item key={`81`}>
                                                    <Link to={`/member/my-rights/create-protect`}>????????????</Link>
                                                </Menu.Item>
                                                <Menu.Item key={`82`}>
                                                    <Link to={`/member/my-rights/officialCertification`}>bilibili??????</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <Menu.Item key={`9`} icon={<LaptopOutlined />} title="???????????????">
                                                <Link to={`/member/laboratory`}>???????????????</Link>
                                            </Menu.Item>
                                            <Menu.Item key={`10`} icon={<LaptopOutlined />} title="????????????">
                                                <Link to={`/member/treaty`}>????????????</Link>
                                            </Menu.Item>
                                            <Menu.Item key={`11`} icon={<LaptopOutlined />} title="????????????">
                                                <Link to={`/member/setting`}>????????????</Link>
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
                                    <Content style={{ padding: '0 60px', minHeight: 280 }}>
                                        <Switch>
                                            <Route path={`/member/home`} component={MemberHome}/>
                                            <Route path={`/member/upload`} component={Upload_c}/>
                                            <Route path={`/member/memberManger/manuscript`} component={Manuscript}/>
                                            <Route path={`/member/memberManger/complaint`} component={Complaint}/>
                                            <Route path={`/member/memberManger/caption`} component={Caption}/>
                                            <Route path={`/member/memberManger`} component={Manuscript}/>
                                            <Route path={`/member/dataCenter`} component={DataCenter}/>
                                            <Route path={`/member/fans`} component={Fans}/>
                                            <Route path={`/member/interaction/comment`} component={Comment}/>
                                            <Route path={`/member/interaction/barrage`} component={Barrage}/>
                                            <Route path={`/member/interaction`} component={Comment}/>
                                            <Route path={`/member/earnings/excitation`} component={Excitation}/>
                                            <Route path={`/member/earnings/charge`} component={Charge}/>
                                            <Route path={`/member/earnings/mutual_up`} component={MutualUp}/>
                                            <Route path={`/member/earnings/pick_up`} component={PickUp}/>
                                            <Route path={`/member/earnings`} component={Excitation}/>
                                            <Route path={`/member/growingUp/taskManage`} component={TaskManage}/>
                                            <Route path={`/member/growingUp/academy`} component={Academy}/>
                                            <Route path={`/member/growingUp`} component={TaskManage}/>
                                            <Route path={`/member/my-rights/create-protect`} component={CreateProtect}/>
                                            <Route path={`/member/my-rights/officialCertification`} component={OfficialCertification}/>
                                            <Route path={`/member/my-rights`} component={CreateProtect}/>
                                            <Route path={`/member/laboratory`} component={Laboratory}/>
                                            <Route path={`/member/treaty`} component={Treaty}/>
                                            <Route path={`/member/setting`} component={Setting}/>
                                            <Redirect to={`/member/home`}/>
                                        </Switch>
                                    </Content>
                                </Layout>
                            )
                        }
                    })()
                }
            </>
        );
    }
}

export default member;