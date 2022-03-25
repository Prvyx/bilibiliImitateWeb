import React, {Component} from 'react';
import { Tabs,Select } from 'antd';

const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onSearch(val) {
    console.log('search:', val);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Caption = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="我的视频" key="1">
            <Select
                showSearch
                placeholder="全部视频"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="video_id1">视频1</Option>
                <Option value="video_id2">视频2</Option>
                <Option value="video_id3">视频3</Option>
            </Select>
            <Select defaultValue="captionCategory1" style={{ width: 120 }} onChange={handleChange}>
                <Option value="captionCategory1">全部字幕类型</Option>
                <Option value="captionCategory2">观众投稿</Option>
                <Option value="captionCategory3">平台自动生成</Option>
            </Select>
        </TabPane>
        <TabPane tab="投稿的字幕" key="2">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="待审核" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已退回" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="已发布" key="4">
                    Content of Tab Pane 4
                </TabPane>
                <TabPane tab="草稿箱" key="5">
                    Content of Tab Pane 5
                </TabPane>
            </Tabs>
        </TabPane>
    </Tabs>
);

export default Caption;