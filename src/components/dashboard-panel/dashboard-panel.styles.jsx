import styled from "styled-components";

export const DashboardPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all .4s;
`;

export const DashboardSplitContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-left: -10px;
    margin-right: -10px;
    flex-direction: column;

    @media all and (min-width: 768px) {
        flex-direction: row;
    }
`;