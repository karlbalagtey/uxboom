import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import PeopleManager from "./people-manager.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const PeopleManagerContainer = compose(
    connect(mapStateToProps),
    WithCollapse,
    WithSpinner
)(PeopleManager);

export default PeopleManagerContainer;