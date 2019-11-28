import React, { Fragment } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    TemplateManagerContainer,
    TemplateManagerHeader,
    TemplateManagerRow
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
            <TemplateManagerHeader>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Filename</th>
                </tr>
            </TemplateManagerHeader>

            <tbody>
                {templates.map(template => (
                    <TemplateManagerRow>
                        <td>{template.name}</td>
                        <td>{template.description}</td>
                        <td>{template.fileName}</td>
                    </TemplateManagerRow>
                ))}
            </tbody>
        </TemplateManagerContainer>
    </Fragment>
);

export default connect(mapStateToProps, null)(TemplateManager);
