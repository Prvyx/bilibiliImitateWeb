import React, {Component} from 'react';
import { Row } from 'antd';
import AdvertContainer from "./AdvertContainer";
import RecommendContainer from "./RecommendContainer";

class Recommend extends Component {
    render() {
        return (
            <Row style={{height:300 ,margin: 40,marginBottom: 200}}>
                <AdvertContainer/>
                <RecommendContainer/>
            </Row>
        );
    }
}

export default Recommend;