import React, {Component} from 'react';
import { Descriptions, Divider} from 'antd'

class SpaceSetting extends Component {
    render() {
        return (
            <div>
                <Descriptions title="隐私设置" size={`small`}>
                    <Descriptions.Item label="公开我的收藏">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开佩戴的粉丝勋章">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开我的追漫(仅APP）">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开我的追番追剧">隐藏</Descriptions.Item>
                    <Descriptions.Item label="勋章墙公开显示所有粉丝勋章">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开拥有的粉丝装扮（仅APP）">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开最近投币的视频">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开我的生日、个人标签">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开轻视频主页（仅APP）">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开最近点赞的视频">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开学校信息">隐藏</Descriptions.Item>
                    <Descriptions.Item label="投稿视频列表中展现直播回放">隐藏</Descriptions.Item>
                    <Descriptions.Item label="投稿视频列表中展现直播回放">隐藏</Descriptions.Item>
                    <Descriptions.Item label="公开我的关注列表">隐藏</Descriptions.Item>
                </Descriptions>
                <Divider/>
                <Descriptions title="排序设置" size={`small`}>

                </Descriptions>
                <Divider/>
                <Descriptions title="我的个人标签" size={`small`}>

                </Descriptions>
            </div>
        );
    }
}

export default SpaceSetting;