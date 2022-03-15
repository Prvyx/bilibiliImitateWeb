import React, {Component} from 'react';
import './index.css'
class ToolbarReport extends Component {
    render() {
        const {thumbUpCount,coinCount,starCount,forwardCount}=this.props
        return (
            <div className={`toolBar`}>
                <ul className={`toolBarUl`}>
                    <li>点赞数：{thumbUpCount}</li>
                    <li>投币数：{coinCount}</li>
                    <li>收藏：{starCount}</li>
                    <li>
                        转发数：{forwardCount}
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