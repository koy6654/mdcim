import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Upload from '../../../components/Upload';

export default class Modbus extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Modbus'>
                <Row>
                    <Col xs={12}>
                        <Box title='Modbus / TCP Access' border type='default' solid>
                            <Checkbox label='Enable Modbus / TCP access' />
                            <Input label='Modbus / TCP port' />
                            <Checkbox label='Enable read-only mode' />
                            <div style={{ textAlign: 'right', paddingTop: '30px', paddingRight: '2%' }}>
                                <button style={{ height: '35px', width: '60px' }}>Save</button>
                            </div>
                            <br />
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}