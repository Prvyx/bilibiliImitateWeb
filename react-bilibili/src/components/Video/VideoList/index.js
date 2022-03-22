import React, {Component} from 'react';
import {List} from 'antd'
import {Link} from 'react-router-dom'

class VideoList extends Component {

    render() {
        const {id,parts}=this.props
        return (
            <div
                id="scrollableDiv"
                style={{
                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >
                <List
                    dataSource={parts}
                    renderItem={item => (
                        <List.Item key={item.selection_id}>
                            <List.Item.Meta
                                style={{overflow:"hidden",whiteSpace: "nowrap",textOverflow: "ellipsis"}}
                                // avatar={<Avatar src={item.picture.large} />}
                                // title={<a href="https://ant.design">{item.name.last}</a>}
                                description={<Link to={`/video/${id}?p=${item.selection_id}`}>P{item.selection_id} {item.selection_title}</Link>}
                            />
                            <div>{item.selection_duration}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default VideoList;