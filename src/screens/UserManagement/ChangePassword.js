import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    inputValue: '',
                    oldPassword: '1234',
                    newPassword: '',
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    };
    handleChange(hc) {
        this.setState({
            inputValue: hc.target.value
        })
    };



    render() {

        const divStyle = {
            paddingLeft: '10px',
            fontSize: '20px',
            paddingBottom: '20px',
            paddingTop: '20px',
        }
        return (
            <Content title='Change Password - admin'>
                <Row>
                    <Col xs={12}>
                        <Box border type='default' solid>
                            <div style={divStyle}>
                                Old Password
                                <input
                                    name='oldpassword'
                                    value={this.state.userData.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '200px', width: '1300px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                            <div style={divStyle}>
                                New Password
                                <input
                                    name='newpassword'
                                    value={this.state.userData.inputValue}
                                    placeholder='required'
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '193px', width: '1300px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                />
                            </div>
                            <div style={divStyle}>
                                Confirm New Password
                                <input
                                    name='confirmnewpassword'
                                    value={this.state.userData.inputValue}
                                    onChange={this.handleChange}
                                    onFocus={(oF) => oF.target.placeholder = ''}
                                    style={{ marginLeft: '122px', width: '1300px', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5' }}
                                    placeholder='required' />
                            </div>
                            <button style={{ float: 'right', width: '100px', height: '35px', marginRight: '14px', marginBottom: '20px', marginTop: '8px', fontSize: '16px', borderRadius: '5px', borderWidth: '1px' }}>Save</button>
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}