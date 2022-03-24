import React, {Component} from 'react';
import Space from "../../components/Space";

class SpacePage extends Component {
    render() {
        console.log(this.props.location)
        return (
            <Space userId={this.props.location.pathname.slice(7)}/>
        );
    }
}

export default SpacePage;