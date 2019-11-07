import styled from "styled-components";

export const AlbumContainer = styled.div`
    height: 300px;
    width: 300px;
    background: lightgray;
    display: block;
    text-align: center;
    margin: 10px;
    transition: all .4s;

    &:hover {
        background: darkgray;
        cursor: pointer;
    }
`;