import React from 'react';

import { 
    DashboardPanelContainer,
    DashboardSplitContainer,
} from './dashboard-panel.styles';

import ContentFeed from '../content-feed/content-feed.component';
import CMSFeed from '../cms-feed/cms-feed.component';

const DashboardPanel = () => (
    <DashboardPanelContainer>
        <section>
            <h1>Welcome to UXBoom CMS</h1>
        </section>

        <DashboardSplitContainer>
            <ContentFeed />
            <CMSFeed />
        </DashboardSplitContainer>
    </DashboardPanelContainer>
);

export default DashboardPanel;