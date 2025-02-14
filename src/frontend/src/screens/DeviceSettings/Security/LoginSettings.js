import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

export default class LoginSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Login Settings'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='User Blocking' border type='default' solid>
                                <Checkbox label='Block user on login failure' />
                                <Select label='Block timeout' />
                                <Input label='Maximum number of failed logins' />
                            </Box>
                            <Box title='Login Limitations' border type='default' solid>
                                <Select label='Idle timeout period' />
                                <Checkbox label='Prevent concurrent login with same username' />
                            </Box>
                            <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                                <button >Save</button>
                            </div>
                            <br />
                        </Col>
                    </Row>
                </Box>
            </Content >
        );
    }
}