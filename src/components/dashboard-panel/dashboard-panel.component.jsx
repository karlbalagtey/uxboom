import React from 'react';

import { 
    DashboardPanelContainer,
    DashboardSplitContainer,
} from './dashboard-panel.styles';

import ContentFeed from '../content-feed/content-feed.container';

const DashboardPanel = () => (
    <DashboardPanelContainer>
        <section>
            <h1>Welcome to UXBoom CMS</h1>
        </section>

        <DashboardSplitContainer>
            <ContentFeed />
            <section>
                <h2>News from UXBoom</h2>
                <div>
                    <div>
                        <h3>Uploaded into an album</h3>
                        <p>18th October 2018 11:04</p>
                    </div>
                    <div>
                        <h3>Uploaded assets</h3>
                        <p>18th October 2018 10:04</p>
                    </div>
                    <div>
                        <h3>Uploaded window</h3>
                        <p>14th October 2018 10:04</p>
                    </div>
                    <div>
                        <h3>Uploaded from asset manager</h3>
                        <p>10th October 2018 10:04</p>
                    </div>
                </div>
            </section>
        </DashboardSplitContainer>
    </DashboardPanelContainer>
);

export default DashboardPanel;