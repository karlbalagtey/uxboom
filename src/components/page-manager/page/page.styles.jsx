import styled from "styled-components";

export const PageContainer = styled.li`
    font-weight: bold;
    padding: 20px;
    list-style-type: none;

    &:nth-child(even) {
        background: lightgray;
    }

    a {
        text-decoration: none;

    }
`;