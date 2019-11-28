import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TemplateManagerRow, TemplateManagerRowEmpty, TemplatePanelButton } from "./template-row.styles";

const TemplateRow = ({ template }) => {
	if (template.pages.length > 0) {
	    return (
	        <TemplateManagerRow>
	            <td>{template.name}</td>
	            <td>{template.description}</td>
	            <td>{template.fileName}</td>
                <td>{template.pages.length === 1 ? template.pages.length + ' page' : template.pages.length + ' pages' }</td>
                <td></td>
	        </TemplateManagerRow>
	    )
	} else {
	    return (
	        <TemplateManagerRowEmpty>
	            <td>{template.name}</td>
	            <td>{template.description}</td>
	            <td>{template.fileName}</td>
                <td>
                    None
                </td>
                <td>
                    <TemplatePanelButton>
                        <FontAwesomeIcon icon="trash-alt" />
                    </TemplatePanelButton>
                </td>
	        </TemplateManagerRowEmpty>
	    )
	}
};

export default TemplateRow;