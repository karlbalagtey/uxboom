import React from "react";

import { StandardContainer } from "./standard.styles";

const StandardTemplate = ({ title }) => (
    <StandardContainer>
        <h1>{title}</h1>
    </StandardContainer>
);

export default StandardTemplate;