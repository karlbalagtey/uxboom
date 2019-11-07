import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in-component";
import DashboardPage from "./pages/dashboard/dashboard.component";

import { GlobalStyle } from "./global.styles";

import Menu from "./components/menu/menu.component";

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Menu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SignInPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
            </Switch>
        </Router>
    );
};

export default App;
