import React from 'react';
import { Sidebar } from 'adminlte-2-react';

const { Item } = Sidebar;

export default function SidebarCore() {
    return (
        <>
            <Item icon='fas-clipboard' text='Dashboard' to='/dashboard' />
            <Item icon='' text='SRC' to='/src' />
            <Item icon='' text='Peripherals' to='/peripherals' />
            <Item icon='' text='Feature Port' to='/featureport' />
            <Item icon='' text='SmartLock' to='/smartlock' />
            <Item icon='fas-users' text='User Management' to='/usermanagement' />
            <Item icon='' text='Device Settings' to='/devicesettings' />
            <Item icon='fas-wrench' text='Maintenance' to='/maintenance' />
        </>
    );
}