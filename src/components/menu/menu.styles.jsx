import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #000;
    height: 100%;
    min-width: 230px;
`;

export const MenuItem = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;

    :hover {
        color: #f26c7c;
    }
`;