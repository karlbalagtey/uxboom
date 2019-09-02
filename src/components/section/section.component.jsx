import React from 'react';

import {
    SectionContainer,
    SectionContent
} from './section.styles.jsx';

const Section = ({ children }) => (
    <SectionContainer>
        <SectionContent>
            { children }
        </SectionContent>
    </SectionContainer>
);

export default Section;