import React, { Fragment } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    TemplateManagerContainer,
    TemplateManagerHeader
} from "./template-manager.styles";

import TemplateManagerRow from "../../../components/template-manager/template-row.component";

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
                    <th>Pages</th>
                    <th></th>
                </tr>
            </TemplateManagerHeader>

            <tbody>
                {templates.map(template => (
                    <TemplateManagerRow key={template.id} template={template} />
                ))}
            </tbody>
        </TemplateManagerContainer>
    </Fragment>
);

export default connect(mapStateToProps, null)(TemplateManager);
