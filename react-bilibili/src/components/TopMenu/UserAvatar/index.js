import React, { useState } from 'react';
import { Modal, Button,Layout ,Image,Tabs ,List,Input,Space,Row, Col,Avatar} from 'antd';
import {Link} from "react-router-dom";
import cookie from 'react-cookies'
import axios from "axios";
const {  Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
const data = [
    {
        title: '微信登录',
    },
    {
        title: '微博登录',
    },
    {
        title: 'QQ登录',
    }
];
function callback(key) {
    console.log(key);
}
const onSearch = value => console.log(value);
const UserAvatar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [commonLoginUserName,setCommonLoginUserName]=useState('');
    const [commonLoginUserPwd,setCommonLoginUserPwd]=useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const commonLogin=()=>{
        let _url='http://localhost:3000/api/commonLogin.ajax'
        axios.post(_url,{
            userName:commonLoginUserName,
            userPwd:commonLoginUserPwd
        }).then(_d=>{
            if(_d.data.status===0){
                cookie.save('user_id',_d.data.data.user_id)
                handleOk()
            }else{
                alert('登录失败')
            }
        })
    }

    return (
        <>
            {
                (()=>{
                    const user_id=cookie.load('user_id')
                    if(user_id===undefined){
                        return (
                            <>
                                <Button type="primary" shape="circle" onClick={showModal} >
                                    登录
                                </Button>
                                <Modal visible={isModalVisible}
                                       width={`820px`}
                                       onOk={handleOk} onCancel={handleCancel}
                                       footer={``}
                                >
                                    <Layout style={{margin: '10px 40px'}}>
                                        <Layout style={{backgroundColor:'#ffffff'}}>
                                            <Sider style={{marginLeft:40,paddingTop:15,paddingRight:40,borderRight:'1px solid #e7e7e7',textAlign: 'center',
                                                backgroundColor:'#ffffff'}}>
                                                <div style={{marginBottom:15}}>
                                                    <span>扫描二维码登录</span>
                                                </div>
                                                <Image
                                                    width={165}
                                                    src="/active/loginQRCode.png"
                                                />
                                                <div>
                                                    <span>请使用哔哩哔哩客户端扫码登录或扫码下载APP</span>
                                                </div>
                                            </Sider>
                                            <Content style={{textAlign:'center',backgroundColor: '#ffffff'}}>
                                                <Tabs defaultActiveKey="1" onChange={callback} centered>
                                                    <TabPane tab="密码登录" key="1">
                                                        <Space direction="vertical">
                                                            <Input
                                                                placeholder="请输入账号"
                                                                prefix={`账号`}
                                                                style={{width:350}}
                                                                onChange={(e)=>{
                                                                    setCommonLoginUserName(e.target.value)
                                                                }}
                                                            />
                                                            <Input
                                                                placeholder="请输入密码"
                                                                prefix={`密码`}
                                                                suffix={<Link to={`/`}>忘记密码</Link>}
                                                                style={{width:350}}
                                                                onChange={(e)=>{
                                                                    setCommonLoginUserPwd(e.target.value)
                                                                }}
                                                            />
                                                        </Space>
                                                        <div style={{margin:'10px 41px'}}>
                                                            <Button style={{margin: '0 8px',width:'45%'}} type="primary">注册</Button>
                                                            <Button
                                                                style={{margin: '0 8px',width:'45%'}} type="primary"
                                                                onClick={commonLogin}
                                                            >
                                                                登录
                                                            </Button>
                                                        </div>
                                                    </TabPane>
                                                    <TabPane tab="短信登陆" key="2">
                                                        <Space direction="vertical">
                                                            <Input
                                                                placeholder="请输入手机号"
                                                                prefix={`+86`}
                                                                suffix={<Link to={`/`}>获取验证码</Link>}
                                                                style={{width:350}}
                                                            />
                                                            <Input
                                                                placeholder="请输入验证码"
                                                                prefix={`验证码`}
                                                                style={{width:350}}
                                                            />
                                                        </Space>
                                                        <div style={{margin:'10px 41px'}}>
                                                            <Button style={{width:'50%'}} type="primary">登录/注册</Button>
                                                        </div>
                                                    </TabPane>
                                                </Tabs>
                                                <div>
                                                    <span style={{textAlign: 'center'}}>其它登录方式</span>
                                                    <List
                                                        style={{margin: '0 80px'}}
                                                        grid={{ gutter: 0, column: 3 }}
                                                        dataSource={data}
                                                        renderItem={item => (
                                                            <List.Item>
                                                                <span>{item.title}</span>
                                                            </List.Item>
                                                        )}
                                                    />
                                                </div>
                                            </Content>
                                        </Layout>
                                    </Layout>
                                    <Footer style={{padding:0,backgroundColor:'#ffffff'}}>
                                        <Row style={{position:'relative',height: 90}} gutter="0" justify="center">
                                            <Col span={6} style={{position:'absolute',bottom:-24,left:-24,width:120,height:114,background:'url(/static/22.png) no-repeat #ffffff center',backgroundSize:'100% 100%'}}/>
                                            <Col span={12}>
                                                <span>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</span>
                                                <br/>
                                                <span>登录或完成注册即代表你同意 用户协议 和 隐私政策</span>
                                            </Col>
                                            <Col span={6} style={{position:'absolute',bottom:-24,right:-24,width:120,height:120,background:'url(/static/33.png) no-repeat #ffffff center',backgroundSize:'100% 100%'}}/>
                                        </Row>
                                    </Footer>
                                </Modal>
                            </>
                        )
                    }else {
                        return (
                            <Avatar className={`avatar`} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32}} />} />
                        )
                    }
                })()
            }
        </>
    );
};

export default UserAvatar;