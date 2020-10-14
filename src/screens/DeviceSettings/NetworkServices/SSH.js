import React, { Component } from 'react';
import { Content, Row, Col, Box, Inputs } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

const { Radio } = Inputs;

export default class SSH extends Component {
    render() {
        const divStyle = {
            paddingTop: '20px',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '20px',
            paddingBottom: '15px',
            paddingTop: '25px',
            width: '30%',
            display: 'inline-block'
        }
        const divStyleSub = {
            display: 'inline-block',
            fontSize: '15px',
            width: '68%',
        }
        return (
            <Content title='SSH'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border type='default' solid>
                                <Checkbox label='Enable SSH access' />
                                <Input label='SSH port' />
                                <div style={{ paddingTop: '20px' }}>
                                    <div style={{
                                        paddingLeft: '10px',
                                        fontSize: '20px',
                                        paddingBottom: '15px',
                                        display: 'inline-block',
                                        width: '30%',
                                    }}>Authentication</div>
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '68%' }}>
                                        <Radio
                                            labelPosition='none'
                                            options={[{
                                                checked: true,
                                                id: 'optionsRadio1',
                                                value: 'optionRadio1',
                                                label: 'Password authentication only',
                                            },
                                            {
                                                id: 'optionsRadios2',
                                                value: 'optionRadio2',
                                                label: 'Public key authentication only'
                                            },
                                            {
                                                id: 'optionsRadio3',
                                                value: 'optionRadio3',
                                                label: 'Password and public key authentication',
                                            },
                                            ]}
                                            name="optionsRadios"
                                            onChange={() => { }}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    fontSize: '25px',
                                    paddingBottom: '10px',
                                    paddingTop: '25px',
                                    borderBottom: '2px solid #E0D7D7',
                                }}>
                                    SSH host keys
                            </div>

                                <br />
                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        RSA Public Key
                                </div>
                                    <div style={divStyleSub}>
                                        aaaaaa
                                </div>
                                </div>

                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        RSA Fingerprint (SHA256)
                                </div>
                                    <div style={divStyleSub}>

                                    </div>
                                </div>

                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        RSA Fingerprint (MD5)
                                </div>
                                    <div style={divStyleSub}>

                                    </div>
                                </div>

                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        ECDSA Public Key
                                </div>
                                    <div style={divStyleSub}>

                                    </div>
                                </div>



                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        ECDSA Public Key (SHA256)
                                </div>
                                    <div style={divStyleSub}>

                                    </div>
                                </div>




                                <div style={{ verticalAlign: 'middle', }}>
                                    <div style={divStyle}>
                                        ECDSA Public Key (MD5)
                                </div>
                                    <div style={divStyleSub}>

                                    </div>
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





