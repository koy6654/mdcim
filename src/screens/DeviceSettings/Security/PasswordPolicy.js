import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

export default class PasswordPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Password Policy'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Password Aging' border type='default' solid>
                                <Checkbox label='Password aging interval' label2='Enabled' />
                            </Box>
                            <Box title='Strong Passwords' border type='default' solid>
                                <Checkbox label='Strong passwords' label2='Enabled' />
                                <Input label='Minimum password length' />
                                <Input label='Maximum password length' />
                                <Checkbox label='Enforce at least one lower case character' />
                                <Checkbox label='Enforce at least one upper case character' />
                                <Checkbox label='Enforce at least one numeric character' />
                                <Checkbox label='Enforce at least one special character' />
                                <Input label='Password history size' />
                            </Box>
                        </Col>
                    </Row>
                    <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                        <button>Save</button>
                    </div>
                </Box>
            </Content >
        );
    }
}