import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }
    render() {
        return (
            <>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '20px',
                    paddingBottom: '15px',
                    paddingTop: '25px',
                    display: 'inline-block',
                    width: '30%',
                }}>
                    {this.props.label}
                </div>
                <div style={{ display: 'inline-block', margin: 'auto', verticalAlign: 'middle', width: '68%' }}>
                    <input
                        type='checkbox'
                        name={this.props.name}
                        style={{ width: '23px', height: '23px' }}
                    />
                </div>
                <br />
            </>

        );
    }
}