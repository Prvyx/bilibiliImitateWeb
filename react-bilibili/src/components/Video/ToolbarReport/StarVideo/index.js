import React, {Component} from 'react';
import {Modal, Button, List, Checkbox, Input} from 'antd';
import axios from "axios";
import cookie from 'react-cookies'
import {BASE_URL} from 'utils/url'


class StarVideo extends Component {
    state={isModalVisible:false,starDirs:[]}
    componentDidMount() {
        this.getStarDir(this.props.videoId)
    }

    getStarDir=(videoId)=>{
        console.log('请求数据')
        let _url=BASE_URL+'/api/user/userStarDir.ajax'
        axios.post(_url,{userId:cookie.load("user_id"),videoId:this.props.videoId})
            .then(_d=>{
                if(_d.data.status===0){
                    console.log(_d.data.data)
                    this.setState({starDirs:_d.data.data})
                }

            })
    }
    // 发送新的该视频的收藏夹状态
    sendStarDir=(videoId)=>{
        let _url=BASE_URL+'/api/user/newUserStarDir.ajax'
        let i=0;
        let newStarDirs=[]
        // console.log(this.state.starDirs)
        for(let ele of this.state.starDirs){
            newStarDirs[i++]={
                star_dir_id:ele.star_dir_id,
                exist:ele.exist
            }
        }
        console.log(newStarDirs)

        axios.post(_url,{
            userId:cookie.load("user_id"),
            videoId:videoId,
            newStarDirs:newStarDirs
        }).then(_d=>{
            console.log(_d.data)
        })
    }
    // 新建收藏夹
    createNewStarDir=(newStarDirTitle)=>{
        console.log(newStarDirTitle)
        let _url=BASE_URL+'/api/user/createNewStarDir.ajax'
        axios.post(_url,{userId:cookie.load('user_id'),starDirTitle:newStarDirTitle})
            .then(_d=>{
                if(_d.data.status===0){
                    console.log(_d.data)
                    this.getStarDir(this.props.videoId)
                }else {
                    alert('新建错误，请检查名称是否重复');
                }
            })
    }
    showModal = () => {
        this.setState({isModalVisible:true})
    };

    handleOk = () => {
        this.sendStarDir(this.props.videoId)
        this.setState({isModalVisible:false})
    };

    handleCancel = () => {
        this.setState({isModalVisible:false})
        this.setState({starDirs:this.state.starDirs})
    };

    onChange=(e) =>{
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        return (
            <>
                <Button type="primary" onClick={this.showModal}>
                    收藏
                </Button>
                <Modal title="添加到收藏夹" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.starDirs||[]}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Checkbox defaultChecked={item.exist} onChange={(e)=>{
                                        const changedStarDirs=this.state.starDirs.map((starDirObj)=>{
                                            if(starDirObj.star_dir_id===item.star_dir_id)
                                                return {...starDirObj,exist:e.target.checked}
                                            else return {...starDirObj}
                                        })
                                        this.setState({starDirs:changedStarDirs})
                                    }
                                    } >{item.star_dir_title}</Checkbox>}
                                />
                            </List.Item>
                        )}
                    />
                    {
                        (()=>{
                            if(this.state.newStarDirInput===undefined){
                                return (
                                    <Button type="primary" onClick={()=>{
                                        this.setState({newStarDirInput:true})
                                    }}>新建收藏夹</Button>
                                )
                            }else {
                                return (
                                    <Input
                                        suffix={<Button type="link" onClick={(e)=>{
                                            this.createNewStarDir(this.state.newStarDirTitle);
                                        }}>新建</Button>}
                                        style={{padding:0}}
                                        onChange={(e)=>{
                                            this.setState({newStarDirTitle:e.target.value})
                                        }}
                                    />
                                )
                            }
                        })()
                    }
                </Modal>
            </>
        );
    }
}

export default StarVideo;