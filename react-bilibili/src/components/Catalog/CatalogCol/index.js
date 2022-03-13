import React, {Component} from 'react';
import {Col} from "antd";

class CatalogCol extends Component {
    render() {
        return (
            <Col style={{borderRadius: 5,backgroundColor: '#f4f6f7'}} span={12/9} {...this.props}/>
        );
    }
}

export default CatalogCol;