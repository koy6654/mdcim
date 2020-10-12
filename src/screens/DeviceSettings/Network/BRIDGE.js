import React, { Component } from 'react';
import { Box, Inputs } from 'adminlte-2-react';

const { Select2 } = Inputs

export default class BRIDGE extends Component {
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
            paddingBottom: '10px',
            paddingTop: '25px',
        }
        return (


            <Box title='BRIDGE' border type='default' collapsable collapsed solid>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '22px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7',
                }}>
                    IPv4
                            </div>
                <br />
                <div style={{ paddingTop: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        verticalAlign: 'middle'
                    }}>
                        Enable IPv4
                                </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '323px' }}>
                        <input type='checkbox' style={{ width: '23px', height: '23px' }} name='enableipv4' value='' />
                    </div>

                </div>
                <div style={divStyle}>
                    IP auto configuration
                                <input
                        name='seconddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '245px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={divStyle}>
                    IP address/prefix length
                                <input
                        name='seconddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '222px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <br />
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '22px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7'
                }}>
                    IPv6
                            </div>
                <br />
                <div style={{ paddingTop: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        verticalAlign: 'middle'
                    }}>
                        Enable IPv6
                                </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '323px' }}>
                        <input type='checkbox' style={{ width: '23px', height: '23px' }} name='enableipv6' value='' />
                    </div>

                </div>
                <div style={divStyle}>
                    IP auto configuration
                                <input
                        name='seconddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '246px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={divStyle}>
                    Preferred hostname
                                <input
                        name='seconddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '255px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
            </Box>
        );
    }
}