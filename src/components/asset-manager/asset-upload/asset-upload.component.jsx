import React, { Fragment } from "react";

import { AssetUploadContainer } from "./asset-upload.styles";
import Dropzone from "react-dropzone";

const AssetUpload = () => (
    <Fragment>
        <section>
            <h1>Upload assets</h1>
        </section>

        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <AssetUploadContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </AssetUploadContainer>
            )}
        </Dropzone>
    </Fragment>
);

export default AssetUpload;
