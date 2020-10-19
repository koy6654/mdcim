import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import { BrowserRouter as Router, Switch, Route, Redirect, IndexRoute } from 'react-router-dom';

import HTTP from './HTTP';
import SNMP from './SNMP';

export default class NetworkServices extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route path='/devicesettings/networkservices' >
                            <Route exact path='/devicesettings/networkservices/http' component={HTTP} />
                            <Route exact path='/devicesettings/networkservices/snmp' component={SNMP} />
                        </Route>
                        <Redirect to="*" component={'/'} />
                    </Switch >
                </main>
            </Router >
        );
    }
}