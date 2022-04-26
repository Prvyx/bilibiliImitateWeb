import React, {Component} from 'react';
import {Card, List} from "antd";
import cookie from 'react-cookies'
import axios from "axios";
import {Link} from "react-router-dom";
import {BASE_URL} from 'utils/url'

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

class MyStar extends Component {
    state={}
    getVideo8BySpaceStar=()=>{
        if(this.props.userId!=='-1'){
            let _url=BASE_URL+'/api/user/video8BySpaceStar.ajax'
            axios.post(_url,{userId:this.props.userId})
                .then(_d=>{
                    console.log(_d.data)
                    this.setState({starList:_d.data.data})
                })
        }

    }
    componentDidMount() {
        this.getVideo8BySpaceStar()
    }

    render() {
        const starList=this.state.starList||[]
        console.log(starList)
        return (
            <div>
                <span>我的收藏夹</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={starList}
                    renderItem={item => (
                        <List.Item key={item.video_id}>
                            <Card
                                hoverable
                                style={{ width: "100%" ,height:"100%"}}
                                cover={<img onClick={()=>{window.open("https://www.bilibili.com/","_blank")}} alt="example" src={`${item.video_img_path}`} style={{borderRadius:8}}/>}
                                size={"small"}
                            >
                                <Meta
                                    style={{fontSize: 12}}
                                    title={<a href="https://www.bilibili.com/"
                                              target={`_blank`}>{`${item.star_dir_title}`}</a>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default MyStar;