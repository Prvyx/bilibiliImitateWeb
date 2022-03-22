import React, {Component} from 'react';
import {Card, List} from "antd";
import axios from "axios";
const {Meta}=Card
const data2 = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 7',
    },
    {
        title: 'Title 8',
    },
];

class MyCoinVideo extends Component {
    state={}
    componentDidMount() {
        this.getCoinVideo()
    }

    // 自定义函数
    getCoinVideo(){
        let _url='https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/'
        let _api='myCoinVideo_api'
        axios.get(_url+_api)
            .then(_d=>{
                this.setState({myCoinVideoData:_d.data.myCoinVideoData})
            })
    }
    render() {
        const myCoinVideoData=this.state.myCoinVideoData||[]
        return (
            <div className={`myVideo`}>
                <span>最近投币的视频</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={myCoinVideoData}
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

export default MyCoinVideo;