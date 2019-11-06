import React from 'react';

import { DashboardContainer } from './dashboard.styles';

import Menu from '../../components/menu/menu.component';
import DashboardPanel from '../../components/dashboard-panel/dashboard-panel.component';

const Dashboard = () => (
    <DashboardContainer>
        <Menu />
        <DashboardPanel />
    </DashboardContainer>
);

export default Dashboard;