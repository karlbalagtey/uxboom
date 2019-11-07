import React from "react";
import { withRouter } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuItemWrap } from "./menu-item.styles";

const MenuItem = ({ title, linkUrl }) => {
    return (
        <MenuItemWrap to={linkUrl}>
            <span>{title}</span>
        </MenuItemWrap>
    );
};

export default withRouter(MenuItem);
