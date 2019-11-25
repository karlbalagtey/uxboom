import React, { Fragment } from "react";

import { AssetUploadContainer } from "./asset-upload.styles";

const AssetUpload = () => (
    <Fragment>
        <section>
            <h1>Upload assets</h1>
        </section>

        <AssetUploadContainer>
            <form>
                <label>Upload asset</label>
                <input type="file" />
            </form>
        </AssetUploadContainer>
    </Fragment>
);

export default AssetUpload;