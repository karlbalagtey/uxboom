import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuItemWrap } from "./menu-item.styles";

const MenuItem = ({ title, link_url, icon }) => (
    <MenuItemWrap to={link_url} activeClassName="active">
        <span>{title}</span>
        <FontAwesomeIcon icon={icon} />
    </MenuItemWrap>
);

export default MenuItem;
