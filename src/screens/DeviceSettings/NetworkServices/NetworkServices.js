import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

import HTTP from './HTTP';


export default class NetworkServices extends Component {
    render() {
        return (
            <>
                <HTTP />
            </>
        );
    }
}