import { createSelector } from "reselect";

const selectUserGroup = state => state.userGroup;

export const selectUserGroupCollections = createSelector(
    [selectUserGroup],
    userGroup => userGroup.collections
);