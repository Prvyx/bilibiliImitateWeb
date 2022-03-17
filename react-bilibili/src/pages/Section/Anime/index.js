import React, {Component} from 'react';
import {Button} from 'antd'
import axios from "axios";
import Catalog from "../../../components/Catalog";

let getAnimeData=()=>{
    let url='https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/'
    axios.get(url+'/test')
        .then( _d =>{
            console.log(_d)
        })
}
class Anime extends Component {
    render() {
        return (
            <div>
                <Catalog/>
                Anime
                <Button onClick={getAnimeData}>点击获取番剧的数据</Button>
            </div>
        );
    }
}

export default Anime;