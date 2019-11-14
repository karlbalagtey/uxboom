import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPageCollections } from "../../../redux/page/page.selectors";
import { PageManagerContainer, PageManagerTitle } from "./page-manager.styles";

import Page from "../../../components/page-manager/page/page.component";

const PageManager = ({ pages }) => (
    <Fragment>
        <h1>Manage Pages</h1>
        <PageManagerContainer>
            <PageManagerTitle>
                <a href="/">Home</a>
            </PageManagerTitle>
            <PageManagerContainer>
                {pages.map(({ id, ...otherCollectionProps }) => (
                    <Page key={id} {...otherCollectionProps} />
                ))}
            </PageManagerContainer>
        </PageManagerContainer>
    </Fragment>
);

const mapStateToProps = createStructuredSelector({
    pages: selectPageCollections
});

export default connect(mapStateToProps, null)(PageManager);
