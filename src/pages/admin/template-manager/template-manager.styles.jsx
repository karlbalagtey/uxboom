import styled from "styled-components";

export const TemplateManagerContainer = styled.table`
    border-spacing: 0;
    border: 1px solid #f5f5f5;
`;

export const TemplateManagerHeader = styled.thead`
    background: #000;
    text-align: left;

    th {
        padding: 20px 10px;
        color: #fff;
    }
`;

export const TemplateManagerBody = styled.body`

`;

export const TemplateManagerRow = styled.tr`
    :nth-child(even) {
        background: #f5f5f5;
    }

    td {
        padding: 20px 10px;
    }
`;