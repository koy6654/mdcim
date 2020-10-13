import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../components/Input';

export default class Dashboard extends Component {
    render() {
        return (
            <Content title='SRC'>
                <Row>
                    <Col xs={12}>
                        <Box title='Details' border='true' type='default' solid>
                            <table>
                                <tr>
                                    <td style={{ paddingTop: '20px', paddingLeft: '10px', paddingBottom: '20px', fontSize: '18px' }}>Firmware version</td>
                                    <td style={{ paddingTop: '20px', paddingLeft: '400px', paddingBottom: '20px', fontSize: '15px' }}>11111</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingBottom: '20px', fontSize: '18px' }}>Model</td>
                                    <td style={{ paddingLeft: '400px', paddingBottom: '20px', fontSize: '15px' }}>099999</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingBottom: '20px', fontSize: '18px' }}>Serial number</td>
                                    <td style={{ paddingLeft: '400px', paddingBottom: '20px', fontSize: '15px' }}>099999</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingBottom: '20px', fontSize: '18px' }}>Mac address</td>
                                    <td style={{ paddingLeft: '400px', paddingBottom: '20px', fontSize: '15px' }}>099999</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingBottom: '20px', fontSize: '18px' }}>Data log</td>
                                    <td style={{ paddingLeft: '400px', paddingBottom: '20px', fontSize: '15px' }}><button name='ExportAsCSV'>Export as CSV</button></td>
                                </tr>
                            </table>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Box title='Settings' border='true' type='default' solid>
                            <div>
                                <Input label='Name' />
                                <br />
                                <div style={{ textAlign: 'right' }}>
                                    <button>Cancel</button>&nbsp;&nbsp;
                                    <button>Save</button>
                                </div>
                            </div>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Box title='Internal Beeper' border='true' type='default' solid collapsable collapsed>
                            <table>
                                <tr>
                                    <td style={{ paddingLeft: '10px', fontSize: '18px' }}>State</td>
                                    <td style={{ paddingLeft: '490px', fontSize: '15px' }}>???</td>
                                </tr>
                            </table>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Box title='Sensors' border='true' type='default' solid collapsable collapsed>
                            <table>
                                <thead>
                                    <th style={{ paddingLeft: '10px', fontSize: '16px', paddingBottom: '10px' }}>Sensor</th>
                                    <th style={{ paddingLeft: '480px', fontSize: '16px', paddingBottom: '10px' }}>Value</th>
                                    <th style={{ paddingLeft: '480px', fontSize: '16px', paddingBottom: '10px' }}>State</th>
                                </thead>
                                <tr style={{ paddingTop: '15px' }}>
                                    <td style={{ paddingLeft: '10px', fontSize: '14px', paddingBottom: '10px' }}>State</td>
                                    <td style={{ paddingLeft: '480px', fontSize: '14px', paddingBottom: '10px' }}>???</td>
                                    <td style={{ paddingLeft: '480px', fontSize: '14px', paddingBottom: '10px' }}>???</td>
                                </tr>
                            </table>
                        </Box>
                    </Col>
                </Row>
            </Content >
        );
    }
}