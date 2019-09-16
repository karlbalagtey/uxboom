import React, { Fragment } from "react";

import { HomePageContainer } from "./homepage.styles";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Section from "../../components/section/section.component";

const HomePage = () => (
    <Fragment>
        <Header />
        <HomePageContainer>
            <Section>
                <h1>Digital innovation and customer experience design</h1>

                <h2>Check out these stories</h2>
                <ul>
                    <li>The Tate Year 3 Project website</li>
                    <li>The Tate Year 3 Project app</li>
                </ul>
            </Section>

            <Section>
                <h1>Strategy and planning</h1>

                <h2>We'll help your business discover new opportunities in digital, make the right decisions and avoid the wrong ones</h2>
                <ul>
                    <li>Digital service design</li>
                    <li>Working with A New Direction</li>
                </ul>
            </Section>

            <Section>
                <h1>Experience design</h1>

                <h2>Your customers expect you to meet their digital needs to simply and beautifully, you can expect us to help you work out how</h2>
                <ul>
                    <li>User research</li>
                    <li>Information architecture</li>
                    <li>Making ANDtogether</li>
                </ul>
            </Section>

            <Section>
                <h1>Design and delivery</h1>

                <h2>Always championing customers, we'll help you adopt a no-nonsense approach to digital and develop a plan that delivers value quickly</h2>
                <ul>
                    <li>Visual design</li>
                    <li>Content editing made easy</li>
                    <li>User centered design</li>
                </ul>
            </Section>
        </HomePageContainer>
        <Footer />
    </Fragment>
);

export default HomePage;
