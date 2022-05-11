import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const CategoryScroll = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                style={{marginBottom:8,padding: '0 10px',width: 40,height:50,borderRadius: 8}}
                onClick={showDrawer}
            >
                <div>分</div>
                <div>区</div>
            </Button>
            <Drawer title="分区" placement="right" onClose={onClose} visible={visible}
                    width='150px'
            >
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>直播</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>动画</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>番剧</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>国创</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>综艺</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>漫画</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>音乐</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>舞蹈</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>游戏</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>知识</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>课堂</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>科技</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>运动</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>汽车</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>生活</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>美食</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>动物圈</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>鬼畜</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>时尚</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>资讯</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>娱乐</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>专栏</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>电影</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>电视剧</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>影视</Button>
                <Button type='link' style={{marginLeft: 10,color:'#18191c'}}>纪录片</Button>
            </Drawer>
        </>
    );
};

export default CategoryScroll;