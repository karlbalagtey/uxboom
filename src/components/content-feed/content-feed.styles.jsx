import styled from "styled-components";

export const ContentFeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    padding: 20px;
    width: unset;
    margin: 10px;

    @media all and (min-width: 768px) {
        width: 50%;
    }
`;