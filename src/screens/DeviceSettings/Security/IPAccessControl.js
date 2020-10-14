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
        title: 'IP/Mask',
        data: 'ipmask',
        render: data => <a href="/hyperlink/anywhere">{data}</a>,
        // render은 hyperlink라고 보면 된다
    },
    {
        title: 'Policy',
        data: 'policy',
    },
    {
        title: '',
        data: 'state',
    },
];

const Data = [
    {
        id: '1',
        ipmask: '리그 오브 레전드',
        policy: '42.5%',
        state: '42.5',
    },
    {
        id: '1',
        ipmask: '비바엔에스',
        policy: '0.05%',
        state: '00.5',
    },
];

export default class IPAccessControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='IP Access Control'>
                <Row>
                    <Col xs={12}>
                        <Box title='IPv4' border type='default' solid>
                            <Checkbox label='Enable IPv4 access control' />
                            <br /><br />
                            <Subtitle label='Inbound Rules' />
                            <Select label='Default policy' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br /><br />
                            <Subtitle label='Outbound Rules' />
                            <Select label='Default policy' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br />
                        </Box>
                        <Box title='IPv6' border type='default' solid>
                            <Checkbox label='Enable IPv6 access control' />
                            <br /><br />
                            <Subtitle label='Inbound Rules' />
                            <Select label='Default policy' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br /><br />
                            <Subtitle label='Outbound Rules' />
                            <Select label='Default policy' />
                            <SimpleTable columns={Columns} data={Data} /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button>Append</button>&nbsp;&nbsp;&nbsp;
                                <button>Insert Above</button>
                            </div>
                            <br />
                        </Box>
                    </Col>
                </Row>
            </Content >
        );
    }
}