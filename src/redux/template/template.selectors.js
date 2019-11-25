import { createSelector } from "reselect";

const selectTemplate = state => state.template;

export const selectTemplateCollection = createSelector(
    [selectTemplate],
    template => template.collections
);