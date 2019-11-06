import styled from "styled-components";

export const CMSFeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: lightgray;
    padding: 20px;
    width: unset;
    margin: 10px;

    @media all and (min-width: 768px) {
        width: 50%;
    }
`;