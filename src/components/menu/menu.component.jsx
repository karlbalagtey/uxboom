import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars, 
    faHome, 
    faGlobe,
    faImage,
    faCloudUploadAlt,
    faSitemap,
    faUsers,
    faUserCog,
    faCogs,
    faFile,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

import { MenuContainer, MenuItem, MenuTitle } from './menu.styles';

const Menu = () => (
    <MenuContainer>
        <MenuTitle>
            <span className="sr-only">Toggle</span>
            <FontAwesomeIcon icon={faBars} />
        </MenuTitle>
        <MenuItem>
            <span>Dashboard</span>
            <FontAwesomeIcon icon={faHome} />
        </MenuItem>
        <MenuItem>
            <span>Edit Site</span>
            <FontAwesomeIcon icon={faGlobe} />
        </MenuItem>
        <MenuItem>
            <span>Asset Manager</span>
            <FontAwesomeIcon icon={faImage} />
        </MenuItem>
        <MenuItem>
            <span>Asset Upload</span>
            <FontAwesomeIcon icon={faCloudUploadAlt} />
        </MenuItem>
        <MenuItem>
            <span>Page Manager</span>
            <FontAwesomeIcon icon={faSitemap} />
        </MenuItem>
        <MenuItem>
            <span>People Manager</span>
            <FontAwesomeIcon icon={faUsers} />    
        </MenuItem>
        <MenuItem>
            <span>Settings</span>
            <FontAwesomeIcon icon={faCogs} />
        </MenuItem>
        <MenuItem>
            <span>Template Manager</span>
            <FontAwesomeIcon icon={faFile} />   
        </MenuItem>
        <MenuItem>
            <span>Manage Account</span>
            <FontAwesomeIcon icon={faUserCog} />    
        </MenuItem>
        <MenuItem>
            <span>Logout</span>
            <FontAwesomeIcon icon={faSignOutAlt} />    
        </MenuItem>
    </MenuContainer>
);

export default Menu;