import React, { Component } from 'react';
import { Content, Row, Col, Box, Inputs } from 'adminlte-2-react';

const { Select2 } = Inputs
const dummyMapping = [
    { key: 'key' },
    { key: 'key2' },
];
const Mapping = dummyMapping.map(m => m.key);

export default class DefaultPreference extends Component {
    render() {
        const divStyle = {
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '20px',
            paddingBottom: '10px',
            paddingTop: '25px',
        }

        return (
            <Content title='Default Preferences'>
                <Row>
                    <Col xs={12}>
                        <Box border type='default' solid>
                            <div style={divStyle}>
                                <Select2
                                    labelPosition="above"
                                    label="Temperature unit"
                                    options={Mapping}
                                    name="temperatureunit" />
                            </div>
                            <div style={divStyle}>
                                <Select2
                                    labelPosition="above"
                                    label="Length unit"
                                    options={Mapping}
                                    name="lengthunit" />
                            </div>
                            <div style={divStyle}>
                                <Select2
                                    labelPosition="above"
                                    label="Pressure unit"
                                    options={Mapping}
                                    name="pressureunit" />
                            </div>
                            <div style={{
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                fontSize: '18px',
                                paddingBottom: '10px',
                                paddingTop: '25px',
                                textAlign: 'center',
                            }}>
                                Please note the default user preferences also apply to the device display, the "Send sensor report" event action and users authenticated via LDAP or Radius
                            </div>
                            <button style={{ float: 'right', width: '100px', height: '35px', marginRight: '14px', marginBottom: '20px', marginTop: '8px', fontSize: '16px', borderRadius: '5px', borderWidth: '1px' }}>Save</button>
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}