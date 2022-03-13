import React, { useState, useEffect } from 'react';
import {Link, Route,Switch} from 'react-router-dom'
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Video from "../../../pages/Video";
import PlayerBlock from "../PlayerBlock";

const VideoList = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://mock.apipost.cn/app/mock/project/4c4dab79-7a8c-41f5-aea0-5217549d2897/parts_api')
            .then(res => res.json())
            .then(body => {
                setData([...data,...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);

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
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 20}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                style={{overflow:"hidden",whiteSpace: "nowrap",textOverflow: "ellipsis"}}
                                // avatar={<Avatar src={item.picture.large} />}
                                // title={<a href="https://ant.design">{item.name.last}</a>}
                                description={<Link to={`/video/BV1wy4y1D7JT?p=${item.id}`}>P{item.id} {item.part}</Link>}
                            />
                            <div>{item.duration}</div>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
            <Switch>
                {/*不能把路由注册只给PlayerBlock组件。*/}
                {/*设想你在浏览器输入http://localhost:3000/video/BV1wy4y1D7JT?p=4，首先会匹配到Video组件，然后匹配到PlayerBlock组件，*/}
                {/*而Video组件会首先渲染自己的PlayerBlock组件，该PlayerBlock组件肯定收不到p，再渲染另一个PlayerBlock组件。*/}
                {/*你觉得你看到的是哪个PlayerBlock组件？说实话，我也不知道*/}
                {/*更好的方法：将p给父组件Video，然后Video再把p给自己的子组件，就不会引起冲突了*/}
                {/*<Route path={`/video/BV1wy4y1D7JT`} component={Video}/>*/}
                {/*<Route path={`/video/BV1wy4y1D7JT`} component={PlayerBlock}/>*/}
            </Switch>
        </div>
    );
}

export default VideoList;