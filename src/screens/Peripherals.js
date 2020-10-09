import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable, Sparkbar } from 'adminlte-2-react';

const Columns = [
    {
        title: '#',
        data: 'id',

    },
    {
        title: 'Name',
        data: 'name',
        render: data => <a href="/hyperlink/anywhere">{data}</a>,
        // render은 hyperlink라고 보면 된다
    },
    {
        title: 'Reading',
        data: 'reading',
    },
    {
        title: 'State',
        data: 'state',
    },
    {
        title: 'Type',
        data: 'type',
    },
    {
        title: 'Serial Number',
        data: 'serialnumber',
    },
    {
        title: 'Position',
        data: 'position',
    },
    {
        title: 'Actuator',
        data: 'actuator',
    },
];

const Data = [
    {
        id: '1',
        name: '리그 오브 레전드',
        reading: '42.5%',
        state: '42.5',
        type: 'success',
        serialnumber: '000000-000000',
        position: 'center',
        actuator: 'OK',
    },
    {
        id: '1',
        name: '비바엔에스',
        reading: '0.05%',
        state: '00.5',
        type: 'success',
        serialnumber: '000000-000001',
        position: 'right',
        actuator: '',
    },
];

export default class Peripherals extends Component {
    render() {
        return (
            <Content title='Peripherals'>
                <Row>
                    <Col xs={12}>
                        <Box title='Devices' border='true' type='default' solid>
                            <SimpleTable columns={Columns} data={Data} />
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}