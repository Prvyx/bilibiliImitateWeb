import React, {Component} from 'react';
import {Avatar, Button, Image} from "antd";
import { Row, Col } from 'antd';

class UpInfo extends Component {
    render() {
        return (
            <Row>
                <Col flex="100px" style={{backgroundColor: ""}}>
                    <div style={{marginLeft: 5}}>
                        <Avatar size={64} src={<Image preview={false}
                                                      src={this.props.userAvatarPath}
                                                      style={{ width: 50 ,borderRadius: 25}} />} />
                    </div>
                </Col>
                <Col flex="auto">
                    <div style={{textAlign:"left",height:"50%"}}><span>{this.props.name}</span></div>
                    <div style={{textAlign:"left",height:"50%"}}>
                        <Button shape={"round"}>充电</Button>
                        <Button shape={"round"}>+关注 1.0万</Button>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default UpInfo;