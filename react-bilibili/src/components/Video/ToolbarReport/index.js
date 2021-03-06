import React, {Component} from 'react';
import {Button} from 'antd'
import StarVideo from './StarVideo'
import './index.css'
import axios from "axios";
import cookie from 'react-cookies'
import {BASE_URL} from 'utils/url'

class ToolbarReport extends Component {
    render() {
        const {thumbUpCount,coinCount,starCount,forwardCount,thumbUp,isCoin,video_id}=this.props

        return (
            <div className={`toolBar`}>
                <ul className={`toolBarUl`}>
                    <li><Button type="link" onClick={()=>{
                        let _url=BASE_URL+'/api/user/userThumbUpRecord.ajax'
                        axios.post(_url,{userId:cookie.load('user_id'),videoId:video_id,isThumbUp:(!thumbUp).toString()})
                            .then(_d=>{
                                console.log(_d.data)
                                if(_d.data.status===0){
                                    this.props.callback1()
                                }
                            })
                    }}>{thumbUp?'点过了':'点赞'} {thumbUpCount}</Button></li>
                    <li><Button type="link" onClick={()=>{
                        if(!isCoin){
                            let _url=BASE_URL+'/api/user/userCoinRecord.ajax'
                            axios.post(_url,{userId:cookie.load('user_id'),videoId:video_id})
                                .then(_d=>{
                                    console.log(_d.data)
                                    if(_d.data.status===0){
                                        this.props.callback1()
                                    }
                                })
                        }else {
                            alert('已经投过币了')
                        }
                    }}>{isCoin?'投过了':'未投币'} {coinCount}</Button></li>
                    <li>
                        <StarVideo starCount={starCount} videoId={video_id}/>
                    </li>
                    <li>
                        转发数：{forwardCount}
                    </li>
                    <li>
                        转发数：占位置
                    </li>
                    <li>
                        稿件投诉
                    </li>
                    <li>
                        记笔记
                    </li>
                </ul>
            </div>
        );
    }
}

export default ToolbarReport;