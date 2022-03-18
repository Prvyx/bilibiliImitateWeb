import React, {Component} from 'react';
import {Tabs} from 'antd'

const {TabPane}=Tabs
class SpaceSubscribe extends Component {
    state = {
        tabPosition: 'top',
    };

    render() {
        const { tabPosition } = this.state;
        return (
            <Tabs tabPosition={tabPosition}>
                <TabPane tab="追番" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="追剧" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="标签" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        );
    }
}

export default SpaceSubscribe;