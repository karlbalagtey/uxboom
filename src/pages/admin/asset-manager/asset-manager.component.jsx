import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAlbumCollections } from "../../../redux/album/album.selectors";
import { AssetManagerContainer } from "./asset-manager.styles";

import Album from "../../../components/asset-manager/album/album.container";

const AssetManager = ({ albums }) => (
    <section className="dashboard-panel">
        <h1>Asset Manager</h1>
        <AssetManagerContainer>
            {albums.map(({ id, ...otherCollectionProps }) => (
                <Album key={id} {...otherCollectionProps} />
            ))}
        </AssetManagerContainer>
    </section>
);

const mapStateToProps = createStructuredSelector({
    albums: selectAlbumCollections
})

export default connect(mapStateToProps, null)(AssetManager);