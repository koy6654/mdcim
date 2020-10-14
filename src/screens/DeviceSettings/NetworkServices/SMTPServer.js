import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Upload from '../../../components/Upload';

export default class SMTPServer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }
    render() {
        return (
            <Content title='SMTP Server'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Server Settings' border type='default' solid>
                                <Input label='IP address / hostname' />
                                <Input label='Port' />
                                <Input label='Sender email address' />
                                <Input label='Number of sending retries' />
                                <Input label='Time between sending retries' />
                                <Checkbox label='Server requires authentication' />
                                <Input label='User name' />
                                <Input label='Password' />
                                <Checkbox label='Enable SNMP over TLS (StartTLS)' />
                                <div>
                                    <div style={{
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        fontSize: '20px',
                                        paddingBottom: '15px',
                                        paddingTop: '25px',
                                        display: 'inline-block',
                                        width: '30%',
                                    }}>CA certification</div>
                                    <div style={{ display: 'inline-block', fontSize: '15px', width: '54%' }}>not set</div>
                                    <div style={{ display: 'inline-block' }}>
                                        <button style={{ width: '70px', height: '35px' }} value='Show'>Show</button>&nbsp;&nbsp;&nbsp;
                                    <button style={{ width: '70px', height: '35px' }} value='Show'>Remove</button>
                                    </div>
                                </div>
                                <Upload />
                                <div>
                                    <div style={{
                                        paddingBottom: '15px',
                                        paddingTop: '35px',
                                        display: 'inline-block',
                                        width: '30%',
                                    }}>
                                    </div>
                                    {/* <div style={{ display: 'inline-block', width: '68%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type='checkbox'
                                            name=''
                                            style={{ width: '23px', height: '23px' }}
                                        />
                                        <span style={{ paddingLeft: '50px', fontSize: '16px', color: 'gray' }}>
                                            Allow expired and not yet valid certificates
                                        </span>
                                    </div>
                                </div> */}
                                    <Checkbox label2='Allow expired and not yet valid certificates' />
                                </div>
                                <br /><br />
                            </Box>

                            <Box title='Test SMTP Settings' border type='default' solid>
                                <Input label='sysContact' />
                                <div>
                                    <div style={{
                                        paddingBottom: '15px',
                                        paddingTop: '35px',
                                        display: 'inline-block',
                                        width: '30%',
                                    }}>
                                    </div>
                                    <div style={{ display: 'inline-block', margin: 'auto', width: '68%' }}>
                                        <button style={{ height: '35px' }}>Send Test Email</button>
                                    </div>
                                </div><br />
                            </Box>

                            <div style={{ textAlign: 'right' }}>
                                <button style={{ height: '35px' }}>Save</button>
                            </div>

                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}