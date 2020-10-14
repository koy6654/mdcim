import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

export default class TLSCertificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='TLS Certificate'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Active TLS Certificate' border type='default' solid>
                                <Row>
                                    <Col xs={6}>
                                        <Box title='Subject' border >

                                        </Box>
                                    </Col>
                                    <Col xs={6}>
                                        <Box title='Issuer' border >

                                        </Box>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Box title='Miscellaneous' border>

                                        </Box>
                                    </Col>
                                </Row>
                            </Box>
                            <div style={{ textAlign: 'center' }}>
                                <button>Download Key</button>&nbsp;&nbsp;&nbsp;
                            <button>Download Certificate</button>
                            </div>
                            <br /><br /><br />
                            <Box title='New TLS Certificate' border type='default' solid>
                                <Row>
                                    <Col xs={6}>
                                        <Box title='Subject' border>

                                        </Box>
                                    </Col>
                                    <Col xs={6}>
                                        <Box title='Subject Alternative Names'>

                                        </Box>
                                    </Col>
                                </Row>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content >
        );
    }
}