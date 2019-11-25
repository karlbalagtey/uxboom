import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectMenuCollapse } from "../../../redux/menu/menu.selectors";

import WithCollapse from "../../../components/with-collapse/with-collapse.component";

import AssetUpload from "../../../components/asset-manager/asset-upload/asset-upload.component";

const mapStateToProps = createStructuredSelector({
    isCollapsed: selectMenuCollapse
});

const AssetUploadContainer = compose(
    connect(mapStateToProps),
    WithCollapse
)(AssetUpload);

export default AssetUploadContainer;