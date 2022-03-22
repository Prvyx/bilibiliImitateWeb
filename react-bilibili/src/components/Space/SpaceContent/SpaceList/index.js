import React, {Component} from 'react';
import {Card, List,Divider} from 'antd'
import axios from "axios";
import './index.css'

const {Meta} = Card

class SpaceList extends Component {
    state={}
    componentDidMount() {
        this.getSpaceListData()
    }

    // 自定义函数
    getSpaceListData(){
        let _url='https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/'
        let _api='spaceListData_api'
        axios.get(_url+_api)
            .then(_d=>{
                this.setState({spaceListData:_d.data.spaceListData})
            })
    }
    render() {
        const spaceListData=this.state.spaceListData||[]
        return (
            <div className={`mySpaceList`}>
                <div>
                    <span>我的视频和视频列表</span>
                </div>
                <span>狂神说Java系列（排序完毕)</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={spaceListData}
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
                <Divider/>
            </div>
        );
    }
}

export default SpaceList;