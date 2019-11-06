import styled from "styled-components";

export const DashboardPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
    margin-left: 230px;
    transition: all .4s;

    &.collapsed {
        margin-left: 55px;
    }
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