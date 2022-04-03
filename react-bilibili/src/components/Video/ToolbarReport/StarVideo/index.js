import React, {Component} from 'react';
import { Modal, Button,List,Checkbox } from 'antd';
import axios from "axios";
import cookie from 'react-cookies'

class StarVideo extends Component {
    state={isModalVisible:false,starDirs:[]}
    componentDidMount() {
        this.getStarDir(this.props.videoId)
    }

    getStarDir=(videoId)=>{
        console.log('请求数据')
        let _url='http://localhost:3000/api/userStarDir.ajax'
        axios.post(_url,{userId:cookie.load("user_id"),videoId:this.props.videoId})
            .then(_d=>{
                if(_d.data.status===0){
                    console.log(_d.data.data)
                    this.setState({starDirs:_d.data.data})
                }

            })
    }
    sendStarDir=(videoId)=>{
        let _url='http://localhost:3000/api/newUserStarDir.ajax'
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
                </Modal>
            </>
        );
    }
}

export default StarVideo;