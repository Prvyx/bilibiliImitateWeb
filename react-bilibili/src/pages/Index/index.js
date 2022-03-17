import React, {Component} from 'react';
import Recommend from "../../components/Recommend";
import ShowList from "../../components/ShowList";
import Catalog from "../../components/Catalog";

class Index extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Index;