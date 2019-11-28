import styled from "styled-components";

import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #000;
    height: 100%;
    min-width: 230px;
    position: absolute;
    left: 0;
    transition: all .4s;

    &.collapsed {
        left: -175px;
    }
`;

export const MenuTitle = styled.button`
    padding: 20px;
    text-decoration: none;
    cursor: pointer;
    background: lightgray;
    border: 0;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    display: flex;
    justify-content: space-between;

    :hover {
        color: #f26c7c;
    }
`;

export const MenuBackButton = styled.button`
    padding: 20px;
    text-decoration: none;
    cursor: pointer;
    background: #f5f5f5;
    border: 0;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    display: flex;
    justify-content: space-between;

    :hover {
        color: #f26c7c;
    }
`;

export const MenuItem = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

    :hover {
        color: #f26c7c;
    }
`;