import React, { Component } from 'react';
import { Box, Inputs } from 'adminlte-2-react';

const { Select2 } = Inputs

export default class CommonNetworkSettings extends Component {
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
            <Box title='Common Network Settings' border type='default' collapsable collapsed solid>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        paddingRight: '65px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        verticalAlign: 'middle'
                    }}>Cascading Mode</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <Select2 width='1175px' />
                    </div>
                </div>
                <div style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        verticalAlign: 'middle'
                    }}>DNS resolver preference</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <Select2 width='1175px' />
                    </div>
                </div>
                <div style={divStyle}>
                    DNS suffixes (optional)
                                <input
                        name='dnssuffixes'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '232px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={divStyle}>
                    First DNS Server
                                <input
                        name='firstdnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '287px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={divStyle}>
                    Second DNS Server
                                <input
                        name='seconddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '261px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={divStyle}>
                    Third DNS Server
                                <input
                        name='thirddnsserver'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ marginLeft: '279px', width: '1175px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                        placeholder='required' />
                </div>
                <div style={{ paddingBottom: '20px' }}></div>
            </Box >
        );
    }
}


