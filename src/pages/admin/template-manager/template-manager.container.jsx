import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import TemplateManager from "./template-manager.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const TemplateManagerContainer = compose(
    connect(mapStateToProps),
    WithCollapse,
    WithSpinner
)(TemplateManager);

export default TemplateManagerContainer;