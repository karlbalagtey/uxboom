import styled from "styled-components";

export const AssetUploadContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: lightgray;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    transition: background .2s;
    
    &:hover {
        cursor: pointer;
        background: gray;
    }

    p {
        color: #ffffff;
        font-size: 24px;
        padding: 20px;
    }
`;