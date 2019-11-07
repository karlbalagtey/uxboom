import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMenuCollapse } from "../../redux/menu/menu.selectors";

import {
    DashboardPanelContainer,
    DashboardSplitContainer
} from "./dashboard-panel.styles";

import ContentFeed from "../content-feed/content-feed.component";
import CMSFeed from "../cms-feed/cms-feed.component";

const DashboardPanel = ({ collapsed }) => (
    <DashboardPanelContainer className={ collapsed ? 'collapsed' : ''}>
        <section>
            <h1>Welcome to UXBoom CMS</h1>
        </section>

        <DashboardSplitContainer>
            <ContentFeed />
            <CMSFeed />
        </DashboardSplitContainer>
    </DashboardPanelContainer>
);

const mapStateToProps = createStructuredSelector({
    collapsed: selectMenuCollapse
});

export default connect(mapStateToProps, null)(DashboardPanel);
