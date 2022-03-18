import React, {Component} from 'react';
import {Card, List} from "antd";
import axios from "axios";
import './index.css'
const {Meta}=Card

class MyVideo extends Component {
    state={}

    componentDidMount() {
        this.getMyVideoData()
    }

    getMyVideoData=()=>{
        let _url='https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/'
        let _api='spaceHome_api'
        axios.get(_url+_api)
            .then(_d=>{
                console.log(_d.data.myVideoData)
                this.setState({myVideoData:_d.data.myVideoData},()=>{
                    // this.render()
                })
            })
    }
    render() {
        const myVideoData=this.state.myVideoData||[]
        return (
            <div className={`myVideo`}>
                <span>我的视频</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={myVideoData}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                hoverable
                                style={{ width: "100%" ,height:"100%"}}
                                cover={<img onClick={()=>{window.open("https://www.bilibili.com/","_blank")}} alt="example" src={`${item.imgUrl}`} style={{borderRadius:8}}/>}
                                size={"small"}
                            >
                                <Meta
                                    style={{fontSize: 12}}
                                    title={<a href="https://www.bilibili.com/"
                                              target={`_blank`}>{`${item.title}`}</a>}
                                    description={<a href="https://www.bilibili.com/" target={`_blank`}>播放量:{`${item.playCount}`} · {`${item.date}`}</a>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default MyVideo;