import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMenu } from "../../redux/menu/menu.actions";
import { selectMenuItems, selectMenuCollapse } from "../../redux/menu/menu.selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuContainer, MenuTitle, MenuItem } from "./menu.styles";
import MenuItemWrap from "../menu-item/menu-item.component";

const Menu = ({ menuItems, dispatch, collapsed }) => (
    <MenuContainer className={collapsed ? 'collapsed' : ''}>
        <MenuTitle
            onClick={() => dispatch(toggleMenu())}
        >
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon="fa-bars" />
        </MenuTitle>

        {menuItems.map(({ id, ...otherSectionProps }) => (
            <MenuItemWrap key={id} {...otherSectionProps} />
        ))}

        <MenuItem to="/logout" style={{ marginTop: "auto" }}>
            <span>Logout</span>
            <FontAwesomeIcon icon="faSignOutAlt" />
        </MenuItem>
    </MenuContainer>
);

const mapStateToProps = createStructuredSelector({
    menuItems: selectMenuItems,
    collapsed: selectMenuCollapse
});

export default connect(mapStateToProps)(Menu);
