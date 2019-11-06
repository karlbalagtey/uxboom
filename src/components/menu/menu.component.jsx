import React from 'react';

import { MenuContainer, MenuItem } from './menu.styles';

const Menu = () => (
    <MenuContainer>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Edit Site</MenuItem>
        <MenuItem>Asset Manager</MenuItem>
        <MenuItem>Asset Upload</MenuItem>
        <MenuItem>Page Manager</MenuItem>
        <MenuItem>People Manager</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Template Manager</MenuItem>
        <MenuItem>Manage Account</MenuItem>
        <MenuItem>Logout</MenuItem>
    </MenuContainer>
);

export default Menu;