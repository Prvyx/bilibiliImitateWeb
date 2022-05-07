import React, {Component} from 'react';
import Recommend from "../../components/Recommend";
import ShowList from "../../components/ShowList";
import Catalog from "../../components/Catalog";
import {Button} from "antd";

class Index extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <Catalog/>
                <Recommend/>
                <ShowList id={`competition`}>赛事</ShowList>
                <ShowList id={`live`}>直播</ShowList>
                <ShowList id={`cartoon`}>动画</ShowList>
                <ShowList id={`anime`}>番剧</ShowList>
                <ShowList id={`music`}>音乐</ShowList>
                <ShowList id={`dance`}>舞蹈</ShowList>
                <ShowList id={`game`}>游戏</ShowList>
                <ShowList id={`knowledge`}>知识</ShowList>
                <ShowList id={`sports`}>运动</ShowList>
                <ShowList id={`foods`}>美食</ShowList>
                <div style={{position:'fixed',top:400,right:45}}>
                    <Button
                        style={{marginBottom:8,padding: '0 10px',width: 40,height:50,borderRadius: 8}}
                    >
                        <div>分</div>
                        <div>区</div>
                    </Button>
                    <br/>
                    <Button
                        style={{padding: '0 10px',width: 40,height:50,borderRadius: 8}}
                    >
                        <div>客</div>
                        <div>服</div>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Index;