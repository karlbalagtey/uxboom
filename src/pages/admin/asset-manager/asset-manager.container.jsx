import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import AssetManager from "./asset-manager.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const AssetManagerContainer = compose(
    connect(mapStateToProps),
    WithCollapse,
    WithSpinner
)(AssetManager);

export default AssetManagerContainer;