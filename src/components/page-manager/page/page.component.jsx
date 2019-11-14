import React from "react";

import { PageContainer } from "./page.styles";

const Page = ({ title, linkUrl }) => (
    <PageContainer>
        <a href={linkUrl}>{title}</a>
    </PageContainer>
);

export default Page;