import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in-component";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SignInPage} />
            </Switch>
        </Router>
    );
};

export default App;
