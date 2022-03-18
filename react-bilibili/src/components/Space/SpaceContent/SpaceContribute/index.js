import React, {Component} from 'react';
import { Layout,Tabs, Radio, Space } from 'antd';
import './index.css'

const { TabPane } = Tabs;

class SpaceContribute extends Component {
    state = {
        tabPosition: 'left',
    };

    render() {
        const { tabPosition } = this.state;
        return (
            <Tabs tabPosition={tabPosition}>
                <TabPane tab="视频" key="1">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="音频" key="2">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="专栏" key="3">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="最新发布" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="最多播放" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="最多收藏" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="相簿" key="4">
                    <Tabs tabPosition={'top'}>
                        <TabPane tab="全部" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="日常" key="2">
                            Content of Tab 2
                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        );
    }
}

export default SpaceContribute;