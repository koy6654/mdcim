import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Radio from '../../components/Radio';

const RadioOptions = [{
    checked: true,
    id: 'optionsRadio1',
    value: 'optionRadio1',
    label: 'User specified time',
},
{
    id: 'optionsRadios2',
    value: 'optionRadio2',
    label: 'Synchronize with NTP server'
},
]

export default class EventRules extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Content title='Date / Time'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box title='Common Settings' border type='default' solid>
                                <Checkbox label='Time zone' label2='Automatic daylight saving time adjustment' />
                                <Select />
                                <div style={{ paddingBottom: '20px' }}></div>
                                <Radio
                                    label='Time setup method'
                                    options={RadioOptions} />
                            </Box >
                            <Box title='NTP Settings' border type='default' solid>
                                <Input label='First time server' />
                                <Input label='Second time server' />
                                <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                                    <button>Check NTP Servers</button>
                                </div>
                                <div style={{
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    fontSize: '20px',
                                    paddingBottom: '15px',
                                    paddingTop: '25px',
                                    display: 'inline-block',
                                    width: '30%',
                                }}>
                                    Active NTP servers
                                </div>
                                <div style={{
                                    fontSize: '20px',
                                    paddingBottom: '15px',
                                    paddingTop: '25px',
                                    display: 'inline-block',
                                    width: '69%',
                                }}>
                                    None
                                </div>
                            </Box >
                        </Col>

                    </Row>
                    <div style={{ textAlign: 'right', paddingRight: '3%' }}>
                        <button>Save</button>
                    </div>
                </Box>
            </Content>
        );
    }
}


