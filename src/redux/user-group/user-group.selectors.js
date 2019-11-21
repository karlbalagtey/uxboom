import { createSelector } from "reselect";

const selectUserGroup = state => state.userGroup;

export const selectUserGroupCollection = createSelector(
    [selectUserGroup],
    userGroup => userGroup.collections
);