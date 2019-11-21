import { createSelector } from "reselect";

const selectUser = state => state.user;
const selectUsers = state => state.users;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectUserCollection = createSelector(
    [selectUsers],
    users => users.collections
);