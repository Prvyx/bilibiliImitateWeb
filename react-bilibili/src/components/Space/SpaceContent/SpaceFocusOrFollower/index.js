import React, {Component} from 'react';
import {Card, Layout, List, Menu, Avatar, Space, Popover, Button} from "antd";
import {LaptopOutlined, UserOutlined} from "@ant-design/icons";
import {BASE_URL} from 'utils/url'
import axios from "axios";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

class SpaceFocusOrFollower extends Component {
    state={}
    getFocusOrFollower=(index)=>{
        let url='';
        if(index===1){
            url=BASE_URL+'/api/user/focus/iFocusWho.ajax'
        }else if(index===2){
            url=BASE_URL+'/api/user/focus/whoFocusMe.ajax'
        }
        axios.post(url,{userId:this.props.userId})
            .then(_d=>{
                if(_d.data.status===0){
                    // 对获得的数据进行加工
                    let focusOrFollowerList=_d.data.data.map((item)=>{
                        return {...item,isFocus:true}
                    })
                    console.log(focusOrFollowerList);
                    this.setState({focusOrFollowerList:focusOrFollowerList,focusOrFollower:index});
                }
            })
    }

    render() {
        let index=1;
        const focusOrFollowerList=this.state.focusOrFollowerList;
        return (
            <Layout className="spaceStar">
                <Sider className="site-layout-background" width={150}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.props.id]}
                        defaultOpenKeys={['sub'+this.props.id]}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="我的关注">
                            <Menu.Item key={`${index++}`} onClick={()=>{
                                this.setState({focusOrFollowerList:[]})
                                this.getFocusOrFollower(1);
                            }}>
                                <span>全部关注</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="我的粉丝">
                            <Menu.Item key={`${index++}`} onClick={()=>{
                                this.setState({focusOrFollowerList:[]})
                                this.getFocusOrFollower(2);
                            }}>
                                <span>我的粉丝</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {
                        (()=>{
                            if(this.state.focusOrFollower===1){
                                return (<span>全部关注</span>);
                            }else if(this.state.focusOrFollower===2){
                                return (<span>全部粉丝</span>)
                            }
                        })()
                    }
                    <Space/>
                    <List
                        itemLayout="horizontal"
                        dataSource={focusOrFollowerList||[]}
                        renderItem={item => (
                            <List.Item actions={[
                                (()=>{
                                    // 若为“我的关注”而不是我的粉丝
                                    if (this.state.focusOrFollower===1){
                                        if (item.isFocus===true){
                                            return (
                                                <Popover content={(
                                                    <div>
                                                        <Button type='link'>设置分组</Button><br/>
                                                        <Button  type='link'
                                                                 onClick={()=>{
                                                            let focusUserId=this.state.focusOrFollower===1?item.followed_user_id:item.follower_user_id;
                                                            axios.post(BASE_URL+'/api/user/focus/userFocus.ajax',{userId:this.props.userId,focusUserId:focusUserId,isFocus:false})
                                                                .then(_d=>{
                                                                    if(_d.data.status===0){
                                                                        let newFocusOrFollowerList=
                                                                            this.state.focusOrFollowerList.map((obj)=>{
                                                                                if(obj.followed_user_id===focusUserId){
                                                                                    return {...obj,isFocus:false}
                                                                                }else return {...obj};
                                                                            })
                                                                        this.setState({focusOrFollowerList:newFocusOrFollowerList})
                                                                    }
                                                                })
                                                        }}>取消关注</Button>
                                                    </div>
                                                )}>
                                                    <Button>已关注</Button>
                                                </Popover>
                                            )
                                        }else {
                                            return (
                                                <Button onClick={()=>{
                                                    let focusUserId=this.state.focusOrFollower===1?item.followed_user_id:item.follower_user_id;
                                                    axios.post(BASE_URL+'/api/user/focus/userFocus.ajax',{userId:this.props.userId,focusUserId:focusUserId,isFocus:true})
                                                        .then(_d=>{
                                                            if(_d.data.status===0){
                                                                let newFocusOrFollowerList=
                                                                    this.state.focusOrFollowerList.map((obj)=>{
                                                                        if(obj.followed_user_id===focusUserId){
                                                                            return {...obj,isFocus:true}
                                                                        }else return {...obj};
                                                                    })
                                                                this.setState({focusOrFollowerList:newFocusOrFollowerList})
                                                            }
                                                        })
                                                }}>关注</Button>
                                            )
                                        }
                                    }
                                })(),
                                <Popover content={(
                                    <div>
                                        <Button>发消息</Button><br/>
                                    </div>
                                )}>
                                    <Button>more</Button>
                                </Popover>
                            ]}>
                                <List.Item.Meta
                                    avatar={<Avatar className={`avatar`}
                                                    src={
                                                        <Link to={`/space/${this.state.focusOrFollower===1?item.followed_user_id:item.follower_user_id}`} target={`_blank`}>
                                                            <img alt={`example`}
                                                                 src={`/static/space/${this.state.focusOrFollower===1?item.followed_user_id:item.follower_user_id}/avatar.png`}
                                                                 width='38px'>
                                                            </img>
                                                        </Link>
                                                    }
                                    />}
                                    title={<Link to={`/space/${this.state.focusOrFollower===1?item.followed_user_id:item.follower_user_id}`} target={`_blank`}>{item.user_name}</Link>}
                                    description="bilibili 知名UP主"
                                />
                            </List.Item>
                        )}
                    />
                </Content>
            </Layout>
        );
    }
}

export default SpaceFocusOrFollower;