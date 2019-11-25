import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";
import ManageAccount from "./manage-account.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const ManageAccountContainer = compose(
    connect(mapStateToProps),
    WithCollapse
)(ManageAccount)

export default ManageAccountContainer;