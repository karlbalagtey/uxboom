import React, { Fragment } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    TemplateManagerContainer,
    TemplateManagerItem,
    TemplateManagerTitle
} from "./template-manager.styles";
import { selectTemplateCollection } from "../../../redux/template/template.selectors";

const mapStateToProps = createStructuredSelector({
    templates: selectTemplateCollection
});

const TemplateManager = ({ templates }) => (
    <Fragment>
        <section>
            <h1>Template Manager</h1>
        </section>
        <TemplateManagerContainer>
            {templates.map(template => (
                <TemplateManagerItem>
                    <TemplateManagerTitle>{template.name}</TemplateManagerTitle>
                    <p>{template.description}</p>
                    <p>{template.fileName}</p>
                </TemplateManagerItem>
            ))}
        </TemplateManagerContainer>
    </Fragment>
);

export default connect(mapStateToProps, null)(TemplateManager);
