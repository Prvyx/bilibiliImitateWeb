import React, {Component} from 'react';
import {Divider} from "antd";

class InfoText extends Component {
    render() {
        return (
            <div style={{marginLeft:110,marginTop:20 ,width: 600}}>
                {this.props.introduce}
                <Divider/>
            </div>
        );
    }
}

export default InfoText;