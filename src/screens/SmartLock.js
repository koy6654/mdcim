import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class SmartLock extends Component {
    render() {
        return (
            <Content title='SmartLock Controller'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Details' border='true' type='default' solid >
                                <table>
                                    <tr>
                                        <th style={{ paddingTop: '20px', paddingLeft: '10px', paddingBottom: '20px', fontSize: '20px' }}>Position</th>
                                        <td style={{ paddingTop: '20px', paddingLeft: '400px', paddingBottom: '20px', fontSize: '18px' }}>On board</td>
                                    </tr>
                                    <tr>
                                        <th style={{ paddingLeft: '10px', paddingBottom: '20px', fontSize: '20px' }}>Serial number</th>
                                        <td style={{ paddingLeft: '400px', paddingBottom: '20px', fontSize: '18px' }}>099999</td>
                                    </tr>
                                </table>
                            </Box>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Box title='Door Handle-1' border='true' type='default' solid>
                                <div style={{ textAlign: 'center' }}>
                                    No peripherals devices managed
                            </div>
                            </Box>
                        </Col>
                        <Col xs={6}>
                            <Box title='Door Handle-1' border='true' type='default' solid>
                                <div style={{ textAlign: 'center' }}>
                                    No peripherals devices managed
                            </div>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}