import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

export default class SNMP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }
    render() {
        return (
            <Content title='SMTP Server'>
                <Row>
                    <Col xs={12}>
                        <Box title='Server Settings' border type='default' solid>
                            <Input label='Read community string' placeholder='riei' />
                            <Input label='Write community string' />
                            <Input label='Read community string' placeholder='riei' />
                            <Input label='Write community string' />
                            <Input label='Write community string' />
                            <Checkbox label='Enable SNMP v3' />
                            <Input label='Write community string' />
                            <Input label='Write community string' />
                            <Checkbox label='Enable SNMP v3' />
                            <button />
                            <Checkbox label='Enable SNMP v1 / v2c' />
                        </Box>

                        <Box title='Test SMTP Settings' border type='default' solid>
                            <Input label='sysContact' />
                            <button />
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}