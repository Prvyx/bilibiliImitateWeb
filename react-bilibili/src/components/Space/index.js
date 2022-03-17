import React, {Component} from 'react';
import {Form, Layout} from "antd";
import SpaceHeader from "./SpaceHeader";
import SpaceContent from "./SpaceContent";
import SpaceSider from "./SpaceSider";

class Space extends Component {
    render() {
        return (
            <Form
                name="validate_other"
                {...this.formItemLayout}
                onFinish={this.onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <div style={{margin: '0 80px',backgroundColor:'green'}}>
                    <Layout>
                        <SpaceHeader/>
                        <Layout>
                            <SpaceContent/>
                            <SpaceSider/>
                        </Layout>
                    </Layout>
                </div>
            </Form>
        );
    }
}

export default Space;