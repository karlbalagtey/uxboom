import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleMenu } from "../../redux/menu/menu.actions";
import { selectMenuItems, selectMenuCollapse } from "../../redux/menu/menu.selectors";
import { selectUserGroupCollection } from "../../redux/user-group/user-group.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuContainer, MenuTitle, MenuBackButton, MenuItem } from "./menu.styles";
import MenuItemWrap from "../menu-item/menu-item.component";

const MenuWrap = ({ mainMenu, userGroups, dispatch, collapsed, location, history }) => {
    const isNotMainMenu = location.pathname === '/people-manager' ? true : false;
    const menuNavItems = isNotMainMenu ? userGroups : mainMenu;

    console.log(history);

    return (
        <MenuContainer className={collapsed ? 'collapsed' : ''}>
            <MenuTitle
                onClick={() => dispatch(toggleMenu())}
            >
                Close
                <FontAwesomeIcon icon={collapsed ? "arrow-right" : "arrow-left"} />
            </MenuTitle>

            { isNotMainMenu ?
                <MenuBackButton onClick={() => history.goBack()}>
                    Back
                    <FontAwesomeIcon icon={"arrow-left"} />                
                </MenuBackButton> : ''
            }

            {menuNavItems.map(({ id, ...otherSectionProps }) => (
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
    mainMenu: selectMenuItems,
    userGroups: selectUserGroupCollection,
    collapsed: selectMenuCollapse
});

const Menu = compose(
    connect(mapStateToProps),
    withRouter
)(MenuWrap);

export default Menu;
