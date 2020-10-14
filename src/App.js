import React, { Component } from 'react';
import AdminLTE, { Content, Navbar, Sidebar } from 'adminlte-2-react'

import NavbarCore from './components/NavbarCore';
import SidebarCore from './components/SidebarCore';

import Dashboard from './screens/Dashboard';
import SRC from './screens/SRC';
import Peripherals from './screens/Peripherals';
import FeaturePort from './screens/FeaturePort';
import SmartLock from './screens/SmartLock';

import Login from './components/Login';
import Register from './components/Register';
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
import SSH from './screens/DeviceSettings/NetworkServices/SSH';
import Telnet from './screens/DeviceSettings/NetworkServices/Telnet';
import Modbus from './screens/DeviceSettings/NetworkServices/Modbus';
import ServiceAdvertising from './screens/DeviceSettings/NetworkServices/ServiceAdvertising';
import IPAccessControl from './screens/DeviceSettings/Security/IPAccessControl';
import RoleBasedAccessControl from './screens/DeviceSettings/Security/RoleBasedAccessControl';
import TLSCertificate from './screens/DeviceSettings/Security/TLSCertificate';
import Authentication from './screens/DeviceSettings/Security/Authentication';
import LoginSettings from './screens/DeviceSettings/Security/LoginSettings';
import PasswordPolicy from './screens/DeviceSettings/Security/PasswordPolicy';
import ServiceAgreement from './screens/DeviceSettings/Security/ServiceAgreement';
import DateTime from './screens/DeviceSettings/DateTime';
import EventRules from './screens/DeviceSettings/EventRules';
import DataLogging from './screens/DeviceSettings/DataLogging';
import DataPush from './screens/DeviceSettings/DataPush';
import ServerReachability from './screens/DeviceSettings/ServerReachability';
import FrontPanel from './screens/DeviceSettings/FrontPanel';
import SerialPort from './screens/DeviceSettings/SerialPort';
import LuaScripts from './screens/DeviceSettings/LuaScripts';
import Miscellaneous from './screens/DeviceSettings/Miscellaneous';


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
        <Login path='/login' exact />
        <Register path='/register' exact />
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
        <SSH path='/devicesettings/networkservices/ssh' exact />
        <Telnet path='/devicesettings/networkservices/telnet' exact />
        <Modbus path='/devicesettings/networkservices/modbus' exact />
        <ServiceAdvertising path='/devicesettings/networkservices/serviceadvertising' exact />
        {/* Security */}
        <IPAccessControl path='/devicesettings/security/ipaccesscontrol' exact />
        <RoleBasedAccessControl path='/devicesettings/security/rolebasedaccesscontrol' exact />
        <TLSCertificate path='/devicesettings/security/tlscertificate' exact />
        <Authentication path='/devicesettings/security/authentication' exact />
        <LoginSettings path='/devicesettings/security/loginsettings' exact />
        <PasswordPolicy path='/devicesettings/security/passwordpolicy' exact />
        <ServiceAgreement path='/devicesettings/security/serviceagreement' exact />
        {/* Else */}
        <DateTime path='/devicesettings/datetime' exact />
        <EventRules path='/devicesettings/eventrules' exact />
        {/* <DataLogging path='/devicesettings/datalogging' exact />
        <DataPush path='/devicesettings/datapush' exact />
        <ServerReachability path='/devicesettings/serverreachability' exact />
        <FrontPanel path='/devicesettings/frontpanel' exact />
        <SerialPort path='/devicesettings/serialport' exact />
        <LuaScripts path='/devicesettings/luascripts' exact />
        <Miscellaneous path='/devicesettings/miscellaneous' exact /> */}






        <Content>

        </Content>
      </AdminLTE >
    );
  }
}
