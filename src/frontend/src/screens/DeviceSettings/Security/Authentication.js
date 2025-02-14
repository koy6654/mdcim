import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Authentication'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Authentication' border type='default' solid>
                                <Select label='Authentication type' />
                                <Checkbox label2='Use local authentication if remote authentication is not available' />
                                <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                                    <button >Save</button>
                                </div>
                                <br />
                            </Box>
                            <Box title='LDAP Servers' border type='default' solid>

                            </Box>
                            <Box title='Radius Servers' border type='default' solid>

                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content >
        );
    }
}