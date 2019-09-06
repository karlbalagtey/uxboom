import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    margin: 0 auto;

    h2 {
        font-size: 20px;
        color: #ffffff;
    }
`;

export const FooterLeft = styled.div`
    width: 50%;
    background: #292527;
`;

export const FooterLeftContent = styled.div`
    padding: 40px;
    width: 100%;
    float: right;
    max-width: 640px;
`;

export const FooterRight = styled.div`
    width: 50%;
    background: #f26c7c;
`;

export const FooterRightContent = styled.div`
    padding: 40px;
    width: 100%;
    float: left;
    max-width: 640px;
`;