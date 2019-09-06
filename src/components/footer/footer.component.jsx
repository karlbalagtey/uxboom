import React from 'react';

import {
    FooterContainer,
    FooterLeft,
    FooterLeftContent,
    FooterRight,
    FooterRightContent
} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <FooterLeft>
            <FooterLeftContent>
                <h2>UXB LONDON</h2>
            </FooterLeftContent>
        </FooterLeft>
        
        <FooterRight>
            <FooterRightContent>
                <h2>MORE</h2>
            </FooterRightContent>
        </FooterRight>
    </FooterContainer>
);

export default Footer;