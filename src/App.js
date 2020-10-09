import React, { Component } from 'react';
<<<<<<< HEAD
import AdminLTE, { Content, Row, Col, Box } from 'adminlte-2-react'

export default function App() {
  return (
    <AdminLTE title={'hi'}>
      <Content>
        <Row>
          <Col>
            <Box>
              App Example
            </Box>
          </Col>
        </Row>
      </Content>
    </AdminLTE>

  );
=======
import AdminLTE, { Content, Navbar, Sidebar } from 'adminlte-2-react'

import NavbarCore from './components/NavbarCore';
import SidebarCore from './components/SidebarCore';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './screens/Dashboard';
import SRC from './screens/SRC';
import Peripherals from './screens/Peripherals';
import FeaturePort from './screens/FeaturePort';
import SmartLock from './screens/SmartLock';

import Users from './screens/UserManagement/Users';
import Roles from './screens/UserManagement/Roles';
import ChangePassword from './screens/UserManagement/ChangePassword';
import UserPreferences from './screens/UserManagement/UserPreferences';
import DefaultPreferences from './screens/UserManagement/DefaultPreferences';

export default class App extends Component {
  render() {
    return (
      <AdminLTE title={['Raritan']} theme='black' browserTitle='Raritan' titleShort='R'>
        <Navbar.Core>
          <NavbarCore />
        </Navbar.Core>
        <Sidebar.Core>
          <SidebarCore />
        </Sidebar.Core>

        <Login path='/login' />
        <Register path='/register' />

        <Dashboard path='/dashboard' />
        <SRC path='/src' />
        <Peripherals path='/peripherals' />
        <FeaturePort path='/featureport' />
        <SmartLock path='/smartlock' />

        {/* UserManagement */}
        <Users path='/users' />
        <Roles path='/roles' />
        <ChangePassword path='/changepassword' />
        <UserPreferences path='/userpreferences' />
        <DefaultPreferences path='/defaultpreferences' />
        <Content>

        </Content>
      </AdminLTE>
    );
  }
>>>>>>> origin/develop
}
