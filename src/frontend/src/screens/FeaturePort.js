import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class FeaturePort extends Component {
    render() {
        return (
            <Content title='Feature Port'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box>
                                <div style={{ textAlign: 'center' }}>
                                    <p>No device is currently connected.</p>
                                    <p>Waiting for device connection...</p>
                                </div>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}