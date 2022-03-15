import React, {Component} from 'react';
import {List} from 'antd'
import {Link} from 'react-router-dom'

class VideoList extends Component {

    render() {
        console.log(this.props)
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
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                style={{overflow:"hidden",whiteSpace: "nowrap",textOverflow: "ellipsis"}}
                                // avatar={<Avatar src={item.picture.large} />}
                                // title={<a href="https://ant.design">{item.name.last}</a>}
                                description={<Link to={`/video/${id}?p=${item.id}`}>P{item.id} {item.part}</Link>}
                            />
                            <div>{item.duration}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default VideoList;