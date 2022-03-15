import React, {Component} from 'react';
import {Layout,Card,Row,Col,List,Divider} from 'antd'
import './index.css'
import axios from "axios";
import ShowListRank from "./ShowListRank";

const {Content,Sider} = Layout
const {Meta} = Card

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
                <ShowListRank id={this.props.id}/>
            </Layout>
        );
    }
}

export default ShowList;