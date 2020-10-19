import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Upload from '../../../components/Upload';

export default class Telnet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    render() {
        return (
            <Content title='Telnet'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border type='default' solid>
                                <Checkbox label='Server requires authentication' />
                                <Input label='IP address / hostname' />
                                <div style={{ textAlign: 'right', paddingTop: '30px', paddingRight: '2%' }}>
                                    <button style={{ height: '35px', width: '60px' }}>Save</button>
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