import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';
import Subtitle from '../../../components/Subtitle';

const Columns = [
    {
        title: '#',
        data: 'id',
    },
    {
        title: 'Start IP',
        data: 'startip',
        // render: data => <a href="/hyperlink/anywhere">{data}</a>,
        // render은 hyperlink라고 보면 된다
    },
    {
        title: 'End IP',
        data: 'endip',
    },
    {
        title: 'Role',
        data: 'role',
    },
    {
        title: 'Policy',
        data: 'policy',
    },
    {
        title: '',
        data: 'empty',
    },
];

const Data = [
    {
        id: '1',
        startip: '1.1.1.1',
        endip: '0.0.0.0',
        role: 'role',
        policy: 'policy',
        empty: 'E',
    },
];

export default class RoleBasedAccessControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Role Based Access Control'>
                <Row>
                    <Col xs={12}>
                        <Box title='IPv4' border type='default' solid>
                            <Checkbox label='Enable role based access control for IPv4' />
                            <Select label='Default policy' placeholder='Accept' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br /><br />
                            <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                                <button>Save</button>
                            </div>
                            <br />
                        </Box>
                        <Box title='IPv6' border type='default' solid>
                            <Checkbox label='Enable role based access control for IPv6' />
                            <Select label='Default policy' placeholder='Accept' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br /><br />
                            <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                                <button>Save</button>
                            </div>
                            <br />
                        </Box>
                    </Col>
                </Row>
            </Content >
        );
    }
}