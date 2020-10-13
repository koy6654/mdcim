import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

export default class HTTP extends Component {
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

        return (
            <Content title='HTTP / HTTPS'>
                <Row>
                    <Col xs={12}>
                        <Box title='HTTP' border type='default' collapsable collapsed solid>
                            <Checkbox label='Enable HTTP access' />
                            <Checkbox label='Enforce use of HTTPS' />
                            <Input label='Port' />
                            <br />
                        </Box>
                        <Box title='HTTPS' border type='default' collapsable collapsed solid>
                            <Checkbox label='Enable HTTPS access' />
                            <Checkbox label='Enable HSTS' />
                            <Input label='Port' />
                            <br />
                        </Box>
                    </Col>
                </Row>
            </Content >
        );
    }
}