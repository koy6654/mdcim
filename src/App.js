import React, { Component } from 'react';
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

import Network from './screens/DeviceSettings/Network/Network';
import NetworkServices from './screens/DeviceSettings/NetworkServices/NetworkServices';
import HTTP from './screens/DeviceSettings/NetworkServices/HTTP';
import SNMP from './screens/DeviceSettings/NetworkServices/SNMP';
import SMTPServer from './screens/DeviceSettings/NetworkServices/SMTPServer';



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

        <Login path='/login' exact />
        <Register path='/register' exact />

        <Dashboard path='/dashboard' exact />
        <SRC path='/src' exact />
        <Peripherals path='/peripherals' exact />
        <FeaturePort path='/featureport' exact />
        <SmartLock path='/smartlock' exact />

        {/* User Management */}
        <Users path='/users' exact />
        <Roles path='/roles' exact />
        <ChangePassword path='/changepassword' exact />
        <UserPreferences path='/userpreferences' exact />
        <DefaultPreferences path='/defaultpreferences' exact />

        {/* Device Settings */}
        <Network path='/devicesettings/network' exact />
        {/* <NetworkServices path='/devicesettings/' /> */}
        <HTTP path='/devicesettings/networkservices/http' exact />
        <SNMP path='/devicesettings/networkservices/snmp' exact />
        <SMTPServer path='/devicesettings/networkservices/smtpserver' exact />

        <Content>

        </Content>
      </AdminLTE >
    );
  }
}
