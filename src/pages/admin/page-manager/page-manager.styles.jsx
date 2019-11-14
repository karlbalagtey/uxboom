import styled from "styled-components";

export const PageManagerContainer = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const ParentPageManagerContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
`;

export const PageManagerTitle = styled.li`
    font-weight: bold;
    padding: 20px;
    background: lightgray;
    list-style-type: none;
    display: flex;
    align-items: center;
    padding-left: 0;

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background: lightgray;
        display: flex;
        align-items: center;
        padding: 5px 25px;
        font-size: 15px;

        &:hover {
            cursor: pointer;
        }
    }
`;
