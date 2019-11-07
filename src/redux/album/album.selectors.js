import { createSelector } from "reselect";

const selectAlbum = state => state.album;

export const selectAlbumCollections = createSelector(
    [selectAlbum],
    album => album.collections
);