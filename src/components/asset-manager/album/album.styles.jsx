import styled from "styled-components";

export const AlbumContainer = styled.div`
    height: 250px;
    background: lightgray;
    display: block;
    text-align: center;
    transition: all .4s;

    &:hover {
        background: darkgray;
        cursor: pointer;
    }
`;