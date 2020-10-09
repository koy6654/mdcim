import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class Dashboard extends Component {
    render() {
        return (
            <Content title='Dashboard'>
                <Row>
                    <Col xs={6}>
                        <Box title='Alerted Sensors' border='true' type='default' solid >
                            <div>
                                Alerted Sensors
                            </div>
                        </Box>
                    </Col>
                    <Col xs={6}>
                        <Box title='Alarms' border='true' type='default' solid>
                            <div>
                                Alarms
                            </div>
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}