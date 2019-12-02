import styled from "styled-components";

export const PageContainer = styled.li`
    font-weight: bold;
    padding: 20px;
    list-style-type: none;
    background: #fff;

    &:nth-child(even) {
        background: #f5f5f5;
    }

    a {
        text-decoration: none;

    }
`;