import styled from "styled-components";

export const PageManagerContainer = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const ParentPageManagerContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    background: #f5f5f5;
    padding-bottom: 5px;
`;

export const PageManagerTitle = styled.li`
    font-weight: bold;
    padding: 20px;
    background: #f5f5f5;
    list-style-type: none;
    display: flex;
    align-items: center;
    padding-left: 0;

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        padding: 5px 25px;
        font-size: 15px;

        &:hover {
            cursor: pointer;
        }
    }
`;
