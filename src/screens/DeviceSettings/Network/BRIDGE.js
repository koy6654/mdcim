import React, { Component } from 'react';
import { Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

export default class BRIDGE extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Box title='BRIDGE' border type='default' collapsable collapsed solid>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '25px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7',
                }}>
                    IPv4
                            </div>
                <br />
                <div style={{ paddingTop: '20px' }}>
                    <Checkbox label='Enable IPv4' />
                </div>
                <Input label='IP auto configuration' />
                <Input label='IP address/prefix length' />
                <br />
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '25px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7'
                }}>
                    IPv6
                </div>
                <br />
                <div style={{ paddingTop: '20px' }}>
                    <Checkbox label='Enable IPv6' />
                </div>
                <Input label='IP auto configuration' />
                <Input label='Preferred hostname' />
                <br />
            </Box>
        );
    }
}