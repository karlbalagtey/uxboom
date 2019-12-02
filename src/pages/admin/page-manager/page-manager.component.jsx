import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPageCollections } from "../../../redux/page/page.selectors";
import {
    ParentPageManagerContainer,
    PageManagerContainer,
    PageManagerTitle
} from "./page-manager.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "../../../components/page-manager/page/page.component";

const PageManager = ({ pages }) => (
    <Fragment>
        <section>
            <h1>Manage Pages</h1>
        </section>
        <ParentPageManagerContainer>
            <PageManagerTitle>
                <button>
                    <span className="sr-only">More</span>
                    <FontAwesomeIcon icon="minus" />
                </button>
                <a href="/">Home</a>
            </PageManagerTitle>
            <PageManagerContainer>
                {pages.map(({ id, ...otherCollectionProps }) => (
                    <Page key={id} {...otherCollectionProps} />
                ))}
            </PageManagerContainer>
        </ParentPageManagerContainer>
    </Fragment>
);

const mapStateToProps = createStructuredSelector({
    pages: selectPageCollections
});

export default connect(mapStateToProps, null)(PageManager);
