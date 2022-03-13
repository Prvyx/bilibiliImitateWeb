import React, {Component} from 'react';
import {Layout,Card,Row,Col,List,Divider} from 'antd'
import './index.css'
import axios from "axios";

const {Content,Sider} = Layout
const {Meta} = Card
const data = [
    {
        id:'0',
        title: '恋 爱 中 的 女 人 潜 力 能 有 多 大 ？',
    },
    {
        id:'1',
        title: '想不明白，动画有什么好看的',
    },
    {
        id:'2',
        title: '七七生日快乐！',
    },
    {
        id:'3',
        title: '当了一年虚拟主播，我开了家公司',
    },
    {
        id:'4',
        title: 'Kizuna AI The Last Live “hello, world 2022”',
    },
    {
        id:'5',
        title: '蜜汁起跑姿势',
    },
    {
        id:'6',
        title: '哎呀，你们怎么都在跟我道歉呢？╭(╯^╰)╮',
    },
    {
        id:'7',
        title: '【原神手书】 甘雨：让子弹飞会 【耗时一千小时】',
    },
    {
        id:'8',
        title: '坏 女 人',
    },
];
class ShowList extends Component {
    state={}

    getShowList(id){
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        let _api=id+"_api"
        console.log("_api:",_api)
        axios.get(_url+_api)
            .then(_d=>{
                const listKey=id+'List'
                const value=_d.data[listKey]
                console.log(listKey,":",value)
                this.setState({[listKey]:value})
            })
    }
    componentDidMount() {
        this.getShowList(this.props.id)
    }

    render() {
        const title=this.props.children
        const listKey=this.props.id+'List'
        return (
            <Layout style={{marginBottom:30,backgroundColor: "#ffffff"}}>
                <Content style={{backgroundColor: ""}}>
                    <Card title={`${title}`} style={{ width: 915 ,height: 500,marginLeft: 18,marginBottom: -10}} bordered={false}>
                        <div className="site-card-wrapper">
                            <Row gutter={[16,16]} justify="end">
                                {
                                    (this.state[listKey]||[]).map((dataObj)=>{
                                        return (
                                            <Col key={dataObj.id} span={6} style={{height: 200}}>
                                                <Card
                                                    hoverable
                                                    style={{ width: "100%" ,height:"100%",backgroundColor:""}}
                                                    cover={<img onClick={()=>{window.open(`${dataObj.toUrl}`,"_blank")}} alt="example" src={dataObj.imgUrl} style={{borderRadius:8}}/>}
                                                    size={"small"}
                                                >
                                                    <Meta
                                                        style={{width: "100%",textAlign: "center"}}
                                                        title={<a href="https://www.bilibili.com/"
                                                                  target={`_blank`}>{dataObj.title}</a>}
                                                        description={<a href="https://www.bilibili.com/" target={`_blank`}>up:{dataObj.author}  {dataObj.date}</a>}
                                                    />
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Card>
                </Content>
                <Sider style={{marginLeft: 30,marginRight: 111,maxWidth: 300,width: 300,backgroundColor: "#ffffff",
                    }}>
                    <Divider orientation="left" orientationMargin={12} style={{backgroundColor: ""}}>排行榜</Divider>
                    <List
                        style={{backgroundColor: "",marginTop: -10,marginLeft: 10,paddingRight: 5}}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item style={{padding:"10px auto"}}>
                                <List.Item.Meta
                                    style={{fontSize: 13}}
                                    title={<a className={`aStyle`} href="https://www.bilibili.com/">{parseInt(item.id)+1}. {item.title}</a>}
                                    // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Sider>
            </Layout>
        );
    }
}

export default ShowList;