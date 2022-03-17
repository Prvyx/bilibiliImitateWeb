import React, {Component} from 'react';
import {Card, List} from "antd";

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

class MyColumn extends Component {
    render() {
        return (
            <div>
                <span>我的专栏</span>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
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

export default MyColumn;