import React, { Fragment } from 'react';

import { ReactComponent as ULogo } from "../../assets/logo/u/uxb_u1.svg";
import { ReactComponent as XLogo } from "../../assets/logo/x/uxb_x.svg";
import { ReactComponent as BLogo } from "../../assets/logo/b/uxb_b1.svg";

import { LogoWrap } from './header-logo.styles';

const HeaderLogo = () => (
    <Fragment>
        <LogoWrap>
            <ULogo />
        </LogoWrap>
        <LogoWrap>
            <XLogo />
        </LogoWrap>
        <LogoWrap>
            <BLogo />
        </LogoWrap>
    </Fragment>
);

export default HeaderLogo;