import React, {Component} from 'react';
import { Card } from 'antd';
const { Meta } = Card;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

class SpaceActive extends Component {

    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="/static/space/586422828/active/1.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        );
    }
}

export default SpaceActive;