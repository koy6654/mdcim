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
            paddingBottom: '30px',
            paddingTop: '25px',
        }
        return (
            <Content title='HTTP / HTTPS'>
                <Row>
                    <Col>
                        <Box title='HTTP' border type='default' collapsable collapsed solid>
                            <div style={divStyle}>
                                Port
                                <input
                                    name='httpport'
                                    value={this.state.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '287px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box title='HTTPS' border type='default' collapsable collapsed solid>
                            <div style={divStyle}>
                                First DNS Server
                                <input
                                    name='httpsport'
                                    value={this.state.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '287px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}