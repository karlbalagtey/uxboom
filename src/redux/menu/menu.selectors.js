import { createSelector } from "reselect";

const selectMenu = state => state.menu;

export const selectMenuItems = createSelector(
    [selectMenu],
    menu => menu.items
);

export const selectMenuCollapse = createSelector(
    [selectMenu],
    menu => menu.collapsed
);