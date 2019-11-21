import UserActionTypes from "./user.types";

export const createUser = () => ({
    type: UserActionTypes.CREATE_USER
});

export const getUser = () => ({
    type: UserActionTypes.GET_USER
});

export const updateUser = () => ({
    type: UserActionTypes.UPDATE_USER
});

export const deleteUser = () => ({
    type: UserActionTypes.DELETE_USER
});