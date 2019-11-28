import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMenu } from "../../redux/menu/menu.actions";
import { selectMenuItems, selectMenuCollapse } from "../../redux/menu/menu.selectors";
import { selectUserGroupCollection } from "../../redux/user-group/user-group.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuContainer, MenuTitle, MenuItem } from "./menu.styles";
import MenuItemWrap from "../menu-item/menu-item.component";

const Menu = ({ menuItems, dispatch, collapsed, history }) => {
    console.log(history);
    
    return (
        <MenuContainer className={collapsed ? 'collapsed' : ''}>
            <MenuTitle
                onClick={() => dispatch(toggleMenu())}
            >
                Close
                <FontAwesomeIcon icon={collapsed ? "arrow-right" : "arrow-left"} />
            </MenuTitle>

            {menuItems.map(({ id, ...otherSectionProps }) => (
                <MenuItemWrap key={id} {...otherSectionProps} />
            ))}

            <MenuItem to="/logout" style={{ marginTop: "auto" }}>
                <span>Logout</span>
                <FontAwesomeIcon icon="sign-out-alt" />
            </MenuItem>
        </MenuContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    menuItems: selectMenuItems,
    userGroups: selectUserGroupCollection,
    collapsed: selectMenuCollapse
});

export default connect(mapStateToProps)(Menu);
