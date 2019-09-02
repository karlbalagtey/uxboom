import React from "react";

import HeaderLogo from '../header-logo/header-logo.component';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from "./header.styles";

const Header = () => (
    <HeaderContainer>
        <LogoContainer to="/">
            <HeaderLogo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/services">SERVICES</OptionLink>
            <OptionLink to="/projects">PROJECTS</OptionLink>
            <OptionLink to="/clients">CLIENTS</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;
