import React, { Component } from 'react';
import { Box, Inputs } from 'adminlte-2-react';

const { Select2 } = Inputs

export default class ETH extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }
    render() {
        const divStyle = {

        }
        return (
            <Box title={this.props.title} border type='default' collapsable collapsed solid>
                <div>
                    <div style={{ textAlign: 'right', borderBottom: '2px solid #E0D7D7' }}>
                        <a href=''>Show EAP Authentication Log</a>
                    </div>
                    <div style={{
                        paddingLeft: '10px',
                        paddingRight: '1px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '25px',
                    }}>
                        Enable interface
                        <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '287px' }}>
                            <input type='checkbox' style={{ width: '23px', height: '23px' }} name='enableipv6' value='' />
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        borderBottom: '2px solid #E0D7D7',
                        paddingLeft: '10px',
                        paddingRight: '1px',
                        fontSize: '22px',
                        paddingBottom: '10px',
                        paddingTop: '25px',
                    }}>
                        Interface Settings
                    </div>
                    <br />
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '25px',
                        paddingRight: '148px',
                        verticalAlign: 'middle'
                    }}>Speed</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <Select2 width='1175px' />
                    </div>
                </div>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        paddingRight: '143px',
                        verticalAlign: 'middle'
                    }}>Duplex</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <Select2 width='1175px' />
                    </div>
                </div>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '10px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '13px',
                        paddingRight: '77px',
                        verticalAlign: 'middle'
                    }}>Authentication</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <Select2 width='1175px' />
                    </div>
                </div>


            </Box >
        );
    }
}


