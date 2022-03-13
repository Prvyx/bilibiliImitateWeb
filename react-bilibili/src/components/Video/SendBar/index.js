import React, {Component} from 'react';
import { List, Card } from 'antd';
import './index.css'
const data = [
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
];
class SendBar extends Component {
    render() {
        return (
            <div className={`sendBar`}>
                <ul className={`sendBarUl`}>
                    <li>50人正在看，已装填21条弹幕</li>
                    <li>屏蔽弹幕</li>
                    <li>弹幕设置</li>
                    <li>
                        <input type="text" placeholder={`发个弹幕见证当下`}/>
                    </li>
                    <li>
                        <button>发送弹幕</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SendBar;