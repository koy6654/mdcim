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
            <Content title='SNMP'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='SNMP Agent' border type='default' solid>
                                <Checkbox label='Enable SNMP v1 / v2c' />
                                <Input label='Read community string' placeholder='riei' />
                                <Input label='Write community string' />
                                <Checkbox label='Enable SNMP v3' />
                            </Box>

                            <Box title='MIB-II System Group' border type='default' solid>
                                <Input label='sysContact' />
                                <Input label='sysName' />
                                <Input label='sysLocation' />
                            </Box>

                            <Box title='SNMP Notificatioins' border type='default' solid>
                                <Checkbox label='Enable SNMP notifications' />
                                <Select label='Notification type' />
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}