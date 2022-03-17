import React, {Component} from 'react';
import {Card, List} from "antd";

const data2 = [
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
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 7',
    },
    {
        title: 'Title 8',
    },
];

class MyStar extends Component {
    render() {
        return (
            <div>
                <span>我的收藏夹</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data2}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>Card content</Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default MyStar;