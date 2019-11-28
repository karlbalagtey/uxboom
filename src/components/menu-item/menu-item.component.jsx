import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuItemWrap } from "./menu-item.styles";

const MenuItem = ({ title, linkUrl, icon }) => (
    <MenuItemWrap to={linkUrl} activeClassName="active">
        <span>{title}</span>
        <FontAwesomeIcon icon={icon} />
    </MenuItemWrap>
);

export default MenuItem;
