import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import PageManager from "./page-manager.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const PageManagerContainer = compose(
    connect(mapStateToProps),
    WithCollapse,
    WithSpinner
)(PageManager);

export default PageManagerContainer;