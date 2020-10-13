import React, { Component } from 'react';
import { Content, Row, Col, Box, Inputs } from 'adminlte-2-react';

import Select from '../../components/Select';

const dummyMapping = [
    { key: 'key' },
    { key: 'key2' },
];
const Mapping = dummyMapping.map(m => m.key);

export default class UserPreference extends Component {
    render() {
        const divStyle = {
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '20px',
            paddingBottom: '10px',
            paddingTop: '25px',
        }
        return (
            <Content title='User Preferences'>
                <Row>
                    <Col xs={12}>
                        <Box border type='default' solid>
                            <Select options={Mapping} label="Temperature unit" />
                            <Select label="Length unit" />
                            <Select label="Pressure unit" />
                            <button style={{ float: 'right', width: '100px', height: '35px', marginRight: '14px', marginBottom: '20px', marginTop: '8px', fontSize: '16px', borderRadius: '5px', borderWidth: '1px' }}>Save</button>
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}