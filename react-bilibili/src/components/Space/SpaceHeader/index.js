import React, {Component} from 'react';
import {Avatar, Col, Image, Row} from "antd";
import {Layout} from "antd";
const {Header} =Layout

class SpaceHeader extends Component {
    render() {
        return (
            <Header
                style={{position: "relative",height: 200,background: `url(/static/spaceHeader.png) no-repeat blue center`}}
            >
                <div style={{position: "absolute",bottom: '20px',left: '20px',width:'70%',height: 64}}>
                    <Row style={{height: 64}}>
                        <Col flex="64px">
                            <Avatar size={64} src={<Image src="https://joeschmoe.io/api/v1/random" style={{width: 64}} />} />
                        </Col>
                        <Col flex="auto">
                            <div style={{padding: 1,height:32,backgroundColor:"red",textAlign:"left"}}>
                                <span>Pryvx</span>
                            </div>
                            <div style={{height:32,backgroundColor:"green",textAlign:"left"}}>
                                <span>个性签名</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Header>
        );
    }
}

export default SpaceHeader;