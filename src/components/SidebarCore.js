import React from 'react';
import { Sidebar } from 'adminlte-2-react';

const { Item } = Sidebar;

export default function SidebarCore() {
    return (
        <>
            <Item icon='fas-clipboard' text='Dashboard' to='/dashboard' />
            <Item icon='fas-th-list' text='SRC' to='/src' />
            <Item icon='fas-circle-notch' text='Peripherals' to='/peripherals' />
            <Item icon='fas-file-import' text='Feature Port' to='/featureport' />
            <Item icon='fas-lock' text='SmartLock' to='/smartlock' />
            <Item icon='fas-user' text='User Management'>
                <Item icon='fas-angle-right' text='Users' to='/users' />
                <Item icon='fas-angle-right' text='Roles' to='/roles' />
                <Item icon='fas-angle-right' text='Change Password' to='/changepassword' />
                <Item icon='fas-angle-right' text='User Preferences' to='/userpreferences' />
                <Item icon='fas-angle-right' text='Default Preferences' to='/defaultpreferences' />
            </Item>
            <Item icon='fas-tablet-alt' text='Device Settings'>
                <Item icon='fas-angle-right' text='Network' to='/' />
                <Item icon='fas-plus' text='Network Services'>
                    <Item icon='fas-angle-right' text='HTTP' to='/' />
                    <Item icon='fas-angle-right' text='SNMP' to='/' />
                    <Item icon='fas-angle-right' text='SMTP Server' to='/' />
                    <Item icon='fas-angle-right' text='SSH' to='/' />
                    <Item icon='fas-angle-right' text='Telnet' to='/' />
                    <Item icon='fas-angle-right' text='Modbus' to='/' />
                    <Item icon='fas-angle-right' text='Service Advertising' to='/' />
                </Item>
                <Item icon='fas-plus' text='Security'>
                    <Item icon='fas-angle-right' text='IP Access Control' to='/' />
                    <Item icon='fas-angle-right' text='Role Based Access Control' to='/' />
                    <Item icon='fas-angle-right' text='TLS Certificate' to='/' />
                    <Item icon='fas-angle-right' text='Authentication' to='/' />
                    <Item icon='fas-angle-right' text='Login Settings' to='/' />
                    <Item icon='fas-angle-right' text='Password Policy' to='/' />
                    <Item icon='fas-angle-right' text='Service Agreement' to='/' />
                </Item>
                <Item icon='fas-angle-right' text='Date / Time' to='/' />
                <Item icon='fas-angle-right' text='Event Rules' to='/' />
                <Item icon='fas-angle-right' text='Data Logging' to='/' />
                <Item icon='fas-angle-right' text='Data Push' to='/' />
                <Item icon='fas-angle-right' text='Server Reachability' to='/' />
                <Item icon='fas-angle-right' text='Front Panel' to='/' />
                <Item icon='fas-angle-right' text='Serial Port' to='/' />
                <Item icon='fas-angle-right' text='Lua Scripts' to='/' />
                <Item icon='fas-angle-right' text='Miscellaneous' to='/' />
            </Item>
            <Item icon='fas-wrench' text='Maintenance'>
                <Item icon='fas-angle-right' text='Device Information' to='/' />
                <Item icon='fas-angle-right' text='Connected Users' to='/' />
                <Item icon='fas-angle-right' text='Event Log' to='/' />
                <Item icon='fas-angle-right' text='Update Firmware' to='/' />
                <Item icon='fas-angle-right' text='Firmware History' to='/' />
                <Item icon='fas-angle-right' text='Bulk Configuration' to='/' />
                <Item icon='fas-angle-right' text='Backup / Restore' to='/' />
                <Item icon='fas-angle-right' text='Network Diagnostics' to='/' />
                <Item icon='fas-angle-right' text='Download Diagnostic' to='/' />
                <Item icon='fas-angle-right' text='Hardware Failures' to='/' />
                <Item icon='fas-angle-right' text='Unit Reset' to='/' />
                <Item icon='fas-angle-right' text='About SRC' to='/' />
            </Item>
        </>
    );
}