import React, {Component} from 'react';
import './index.css'
class ToolbarReport extends Component {
    render() {
        return (
            <div className={`toolBar`}>
                <ul className={`toolBarUl`}>
                    <li>点赞数：2120</li>
                    <li>投币数：2114</li>
                    <li>收藏：1.0万</li>
                    <li>
                        转发数：128
                    </li>
                    <li>
                        转发数：128
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