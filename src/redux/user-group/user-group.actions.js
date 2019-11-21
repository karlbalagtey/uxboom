import UserGroupActionTypes from "./user.types";

export const createUserGroup = () => ({
    type: UserGroupActionTypes.CREATE_USERGROUP
});

export const updateUserGroup = () => ({
    type: UserGroupActionTypes.UPDATE_USERGROUP
});

export const deleteUserGroup = () => ({
    type: UserGroupActionTypes.DELETE_USERGROUP
});