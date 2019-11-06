import React from "react";

import { ContentFeedContainer } from "./content-feed.styles";

const ContentFeed = () => (
    <ContentFeedContainer>
        <h2>Recently Added</h2>
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
    </ContentFeedContainer>
);

export default ContentFeed;
