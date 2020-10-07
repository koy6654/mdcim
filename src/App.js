import React, { Component } from 'react';
import AdminLTE, { Content, Navbar, Sidebar } from 'adminlte-2-react'

import NavbarCore from './components/NavbarCore';
import SidebarCore from './components/SidebarCore';

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
        <Content>

        </Content>
      </AdminLTE>
    );
  }
}
