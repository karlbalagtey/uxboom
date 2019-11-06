import styled from "styled-components";

import { Link } from "react-router-dom";

export const MenuItemWrap = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: space-between;

    :hover {
        color: #f26c7c;
    }
`;