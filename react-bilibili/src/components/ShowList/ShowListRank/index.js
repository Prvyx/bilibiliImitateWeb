import React, {Component} from 'react';
import {Layout,Divider, List} from "antd";
import axios from "axios";
const {Sider}=Layout

class ShowListRank extends Component {
    state={}
    getShowListRank(id){
        let _url="https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/"
        let _api=id+"Rank_api"
        axios.get(_url+_api)
            .then(_d=>{
                const data=_d.data.results
                this.setState({data:data})
            })
    }
    componentDidMount() {
        this.getShowListRank(this.props.id)
    }
    render() {
        return (
            <Sider style={{marginLeft: 30,marginRight: 111,maxWidth: 300,width: 300,backgroundColor: "#ffffff",
            }}>
                <Divider orientation="left" orientationMargin={12} style={{backgroundColor: ""}}>排行榜</Divider>
                <List
                    style={{backgroundColor: "",marginTop: -10,marginLeft: 10,paddingRight: 5}}
                    itemLayout="horizontal"
                    dataSource={this.state.data}
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
        );
    }
}

export default ShowListRank;