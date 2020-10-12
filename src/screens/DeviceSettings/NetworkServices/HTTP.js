import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class HTTP extends Component {

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
        const divStyle = {
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '20px',
            paddingBottom: '15px',
            paddingTop: '25px',
        }
        return (
            <Content title='HTTP / HTTPS'>
                <Row>
                    <Col>
                        <Box title='HTTP' border type='default' collapsable collapsed solid>
                            <div style={divStyle}>
                                <div style={{ display: 'inline-block' }}>
                                    Enable HTTP access
                                </div>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '299px' }}>
                                    <input type='checkbox' style={{ width: '23px', height: '23px' }} />
                                </div>
                            </div>
                            <div style={divStyle}>
                                <div style={{ display: 'inline-block' }}>
                                    Enforce use of HTTPS
                                </div>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '288px' }}>
                                    <input type='checkbox' style={{ width: '23px', height: '23px' }} />

                                </div>
                                <div style={{ fontSize: '16px', paddingLeft: '30px', display: 'inline-block', verticalAlign: 'middle', }}>Redirect HTTP connections to HTTPS</div>
                            </div>
                            <div style={divStyle}>
                                Port
                                <input
                                    name='httpport'
                                    value={this.state.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '430px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                            <br />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box title='HTTPS' border type='default' collapsable collapsed solid>
                            <div style={divStyle}>
                                <div style={{ display: 'inline-block' }}>
                                    Enable HTTPS access
                                </div>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '288px' }}>
                                    <input type='checkbox' style={{ width: '23px', height: '23px' }} />
                                </div>
                            </div>
                            <div style={divStyle}>
                                <div style={{ display: 'inline-block' }}>
                                    Enable HSTS
                                </div>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '359px' }}>
                                    <input type='checkbox' style={{ width: '23px', height: '23px' }} />
                                </div>

                            </div>
                            <div style={divStyle}>
                                Port
                                <input
                                    name='httpsport'
                                    value={this.state.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '430px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                            <br />
                        </Box>
                    </Col>
                </Row>
            </Content >
        );
    }
}