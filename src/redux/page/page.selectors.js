import { createSelector } from "reselect";

const selectPage = state => state.page;

export const selectPageCollections = createSelector(
    [selectPage],
    page => page.collections
);