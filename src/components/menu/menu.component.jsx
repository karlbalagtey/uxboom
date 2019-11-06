import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMenuItems } from "../../redux/menu/menu.selectors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MenuContainer, MenuTitle } from './menu.styles';
import MenuItem from "../menu-item/menu-item.component";

const Menu = ({ menuItems }) => (
    <MenuContainer>
        <MenuTitle>
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon="fa-bars" />
        </MenuTitle>

        {menuItems.map(({id, ...otherSectionProps}) => (
            <MenuItem 
                key={id}
                {...otherSectionProps}
            />
        ))}

        <MenuItem 
            to="/logout" 
            style={{marginTop: 'auto'}}
        >
            <span>Logout</span>
            <FontAwesomeIcon icon="faSignOutAlt" />    
        </MenuItem>
    </MenuContainer>
);

const mapStateToProps = createStructuredSelector({
    menuItems: selectMenuItems
});

export default connect(mapStateToProps)(Menu);