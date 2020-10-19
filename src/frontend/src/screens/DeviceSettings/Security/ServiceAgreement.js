import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

export default class ServiceAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Restrict Service Agreement'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border solid>
                                <Checkbox label='Enforce restricted service agreement' />
                            </Box>
                            <Box border solid>

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