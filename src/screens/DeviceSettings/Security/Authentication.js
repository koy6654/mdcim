import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Checkbox2 from '../../../components/Checkbox2';
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

export default class TLSCertificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Content title='Authentication'>
                <Row>
                    <Col xs={12}>
                        <Box title='Authentication' border type='default' solid>
                            <Select label='Authentication type' />
                            <Checkbox2 label='Use local authentication if remote authentication is not available' />
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
            </Content >
        );
    }
}