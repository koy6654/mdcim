import React, { Component } from 'react';

export default class Checkbox2 extends Component {
    render() {
        return (
            <div style={{
                paddingBottom: '10px',
                paddingTop: '10px',
            }}>
                <div style={{
                    display: 'inline-block',
                    width: '30%',
                }}>
                </div>
                <div style={{ display: 'inline-block', width: '68%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type='checkbox'
                            name=''
                            style={{ width: '23px', height: '23px' }}
                        />
                        <span style={{ paddingLeft: '50px', fontSize: '16px', color: 'gray' }}>
                            {this.props.label}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}