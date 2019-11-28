import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const MenuItemWrap = styled(NavLink)`
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: space-between;

    :hover, &.active {
        color: #f26c7c;
    }
`;