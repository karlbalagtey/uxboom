import React from "react";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuItemWrap } from "./menu-item.styles";

const MenuItem = ({ title, linkUrl, icon }) => {
    return (
        <MenuItemWrap to={linkUrl} activeClassName="active">
            <span>{title}</span>
            <FontAwesomeIcon icon={icon} />
        </MenuItemWrap>
    );
};

export default withRouter(MenuItem);
