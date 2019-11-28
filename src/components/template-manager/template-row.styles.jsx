import styled from "styled-components";

export const TemplateManagerRow = styled.tr`
    :nth-child(even) {
        background: #f5f5f5;
    }

    td {
        padding: 20px 10px;
    }
`;

export const TemplateManagerRowEmpty = styled.tr`
    :nth-child(even) {
        background: #f5f5f5;
    }

    td {
        padding: 20px 10px;

	    :first-child {
	    	border-left: 2px solid red;
	    }

        :last-child {
            padding: 0;
            height: 100%;
        }
    }
`;

export const TemplatePanelButton = styled.button`
    background: transparent;
    border: 0;
    color: #000;
    height: 100%;
    width: 100%;
    font-size: 18px;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        background: red;
        color: #fff;
        border-radius: 30px;
    }
`;