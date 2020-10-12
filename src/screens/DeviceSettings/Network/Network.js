import React, { Component } from 'react';
import { Content, Row, Col, Box, Inputs } from 'adminlte-2-react';

import CommonNetworkSettings from './CommonNetworkSettings';
import BRIDGE from './BRIDGE';
import ETH from './ETH';
import WIRELESS from './WIRELESS';

export default class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }

    }

    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }

    render() {
        return (
            <Content title='Network'>
                <Row>
                    <Col xs={12}>
                        <CommonNetworkSettings />
                        <BRIDGE />
                        <ETH title='ETH1' />
                        <ETH title='ETH2' />
                        <WIRELESS />
                    </Col>
                </Row>
            </Content>
        );
    }
}