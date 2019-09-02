import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
`;

export const LogoContainer = styled(Link)`
    display: flex;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;

    :hover {
        color: #f26c7c;
    }
`;
