import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class ServiceAdvertising extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Service Advertising'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border type='default' solid>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        fontSize: '20px',
                                        display: 'inline-block',
                                        width: '30%',
                                    }}>
                                        Advertise network services via ...
                                </div>
                                    <div style={{ width: '68%', display: 'inline-block' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '6px' }}>
                                            <input
                                                type='checkbox'
                                                name=''
                                                style={{ width: '23px', height: '23px' }}
                                            />
                                            <span style={{ paddingLeft: '50px', fontSize: '16px', color: 'gray' }}>
                                                Allow expired and not yet valid certificates
                                        </span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }} >
                                            <input
                                                type='checkbox'
                                                name=''
                                                style={{ width: '23px', height: '23px' }}
                                            />
                                            <span style={{ paddingLeft: '50px', fontSize: '16px', color: 'gray' }}>
                                                Allow expired and not yet valid certificates
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', paddingTop: '30px', paddingRight: '2%' }}>
                                    <button style={{ height: '35px', width: '60px' }}>Save</button>
                                </div>
                                <br />
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}