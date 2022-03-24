import React, {Component} from 'react';
import {Avatar, Col, Row} from "antd";
import {Layout} from "antd";
import {Link} from "react-router-dom";
import cookie from "react-cookies";
const {Header} =Layout

class SpaceHeader extends Component {

    render() {
        const spaceHeaderProps=this.props.spaceHeaderProps
        const userName=spaceHeaderProps!==undefined?spaceHeaderProps.userName:'test'
        const avatarImgPath=spaceHeaderProps!==undefined?spaceHeaderProps.avatarImgPath:'test'
        const grade=spaceHeaderProps!==undefined?spaceHeaderProps.grade:'test'
        const signatureContent=spaceHeaderProps!==undefined?spaceHeaderProps.signatureContent:'test'

        return (
            <Header
                style={{position: "relative",height: 200,background: `url(/static/spaceHeader.png) no-repeat blue center`}}
            >
                <div style={{position: "absolute",bottom: '20px',left: '20px',width:'70%',height: 64}}>
                    <Row style={{height: 64}}>
                        <Col flex="64px">
                            <Avatar className={`avatar`} style={{width:64,height:64,marginLeft:0}}
                                    src={
                                        <Link to={`${avatarImgPath}`} target={`_blank`}>
                                            <img alt={`example`}
                                                 src={`/static/space/${cookie.load('user_id')}/avatar.png`}
                                                 width='64px'>
                                            </img>
                                        </Link>
                                    }
                            />
                        </Col>
                        <Col flex="auto">
                            <div style={{padding: 1,height:32,backgroundColor:"red",textAlign:"left"}}>
                                <span>{userName} Lv{grade}</span>
                            </div>
                            <div style={{height:32,backgroundColor:"green",textAlign:"left"}}>
                                <span>{signatureContent}</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Header>
        );
    }
}

export default SpaceHeader;