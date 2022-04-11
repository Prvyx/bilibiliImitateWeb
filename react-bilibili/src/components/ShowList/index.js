import React, {Component} from 'react';
import {Layout, Card, Row, Col, Empty, Button} from 'antd'
import './index.css'
import axios from "axios";
import ShowListRank from "./ShowListRank";
import {Link} from "react-router-dom";

const {Content} = Layout
const {Meta} = Card

class ShowList extends Component {
    state={}

    getShowList=(id)=>{
        // 注释mock
        // let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        // let _api=id+"_api"
        // console.log("_api:",_api)
        let _url='http://localhost:3000/api/video/indexShowList.ajax'
        axios.post(_url,{categoryId:id})
            .then(_d=>{
                // 注释mock
                // const listKey=id+'List'
                // const value=_d.data[listKey]
                // console.log(listKey,":",value)
                // this.setState({[listKey]:value})

                // 向后台要数据
                const listKey=id+'List'
                if(_d.data.status===0){
                    this.setState({[listKey]:_d.data.data})
                }
            })
    }
    componentDidMount() {
        this.getShowList(this.props.id)
    }

    render() {
        const title=this.props.children
        const listKey=this.props.id+'List'
        if(this.state[listKey]===undefined){
            return (
                <Layout style={{marginBottom:30,backgroundColor: "#ffffff"}}>
                    <Content style={{backgroundColor: ""}}>
                        <Card title={`${title}`} style={{ width: 915 ,height: 500,marginLeft: 18,marginBottom: -10}} bordered={false}>
                            <div className="site-card-wrapper">
                                <Empty style={{padding: 120,height: '300px'}} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </div>
                        </Card>
                    </Content>
                    <ShowListRank id={this.props.id}/>
                </Layout>
            )
        }else {
            return (
                <Layout style={{marginBottom:30,backgroundColor: "#ffffff"}}>
                    <Content style={{position:'relative',backgroundColor: ""}}>
                        <Card title={`${title}`} style={{ width: 915 ,height: 500,marginLeft: 18,marginBottom: -10}} bordered={false}>
                            <div className="site-card-wrapper">
                                <Row gutter={[16,16]} justify="end">
                                    {
                                        (this.state[listKey]||[]).map((dataObj)=>{
                                            return (
                                                <Col key={dataObj.video_id} span={6} style={{height: 200}}>
                                                    <Card
                                                        hoverable
                                                        style={{ width: "100%" ,height:"100%",backgroundColor:""}}
                                                        cover={<Link to={`/video/${dataObj.video_id}`} target={'_blank'}>
                                                            <img
                                                                alt="example"
                                                                src={dataObj.video_img_path}
                                                                style={{width:'100%',height:'100%',borderRadius:8}}
                                                            />
                                                        </Link>}
                                                        size={"small"}
                                                    >
                                                        <Meta
                                                            style={{width: "100%",textAlign: "center"}}
                                                            title={<Link to={`/video/${dataObj.video_id}`} target={'_blank'}>{dataObj.video_title}</Link>}
                                                            description={<a href="https://www.bilibili.com/" target={`_blank`}>up:{dataObj.user_name}  {dataObj.video_datetime}</a>}
                                                        />
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Card>
                        <Button type="primary" style={{position:'absolute',top:20,right:15}}
                                onClick={()=>{
                                    this.getShowList(this.props.id)
                                }}
                        >
                            <div>换一换</div>
                        </Button>
                    </Content>
                    <ShowListRank id={this.props.id}/>
                </Layout>
            );
        }
    }
}

export default ShowList;