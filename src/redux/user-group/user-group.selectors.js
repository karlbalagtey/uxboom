import { createSelector } from "reselect";

const selectUsers = state => state.users;
const selectUserGroup = state => state.userGroup;

export const selectUsersCollection = createSelector(
    [selectUsers],
    users => users.collection
);

export const selectUserCollection = collectionUrlParam =>
    createSelector(
        [selectUsers],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

export const selectUserGroupCollection = createSelector(
    [selectUserGroup],
    userGroup => userGroup.collections
);