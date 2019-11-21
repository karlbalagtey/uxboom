import styled from "styled-components";

export const UserGroupName = styled.div`
    display: flex;
    padding: 10px;

    &:nth-child(even) {
        background: lightgray;
    }

    a {
        text-decoration: none;
    }
`;