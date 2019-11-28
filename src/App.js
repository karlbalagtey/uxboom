import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in-component";
import DashboardPage from "./pages/admin/dashboard/dashboard.container";
import AssetManagerPage from "./pages/admin/asset-manager/asset-manager.container";
import PageManagerPage from "./pages/admin/page-manager/page-manager.container";
import PeopleManagerPage from "./pages/admin/people-manager/people-manager.container";
import SettingsPage from "./pages/admin/settings-page/settings-page.container";
import TemplateManagerPage from "./pages/admin/template-manager/template-manager.container";
import ManageAccountPage from "./pages/admin/manage-account/manage-account.container";
import AssetUploadPage from "./pages/admin/asset-manager/asset-upload.container";

import { GlobalStyle } from "./global.styles";

import Menu from "./components/menu/menu.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHome,
    faGlobe,
    faImage,
    faCloudUploadAlt,
    faSitemap,
    faUsers,
    faCogs,
    faFile,
    faUserCog,
    faSignOutAlt,
    faArrowLeft,
    faArrowRight,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
    library.add(
        faHome,
        faGlobe,
        faImage,
        faCloudUploadAlt,
        faSitemap,
        faUsers,
        faCogs,
        faFile,
        faUserCog,
        faSignOutAlt,
        faArrowLeft,
        faArrowRight,
        faTrashAlt
    );

    return (
        <Router>
            <GlobalStyle />
            <Menu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SignInPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route
                    exact
                    path="/asset-manager"
                    component={AssetManagerPage}
                />
                <Route exact path="/page-manager" component={PageManagerPage} />
                <Route
                    exact
                    path="/people-manager"
                    component={PeopleManagerPage}
                />
                <Route exact path="/settings" component={SettingsPage} />
                <Route
                    exact
                    path="/template-manager"
                    component={TemplateManagerPage}
                />
                <Route
                    exact
                    path="/manage-account"
                    component={ManageAccountPage}
                />
                <Route exact path="/asset-upload" component={AssetUploadPage} />
            </Switch>
        </Router>
    );
};

export default App;
