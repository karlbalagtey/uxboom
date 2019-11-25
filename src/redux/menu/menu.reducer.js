import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
    collapsed: false,
    items: [
        {
            title: "Dashboard",
            icon: "home",
            id: 1,
            linkUrl: "/dashboard"
        },
        {
            title: "Edit Site",
            icon: "globe",
            id: 2,
            linkUrl: "/edit-site"
        },
        {
            title: "Asset Manager",
            icon: "image",
            id: 3,
            linkUrl: "/asset-manager"
        },
        {
            title: "Asset Upload",
            icon: "cloud-upload-alt",
            id: 4,
            linkUrl: "/asset-upload"
        },
        {
            title: "Page Manager",
            icon: "sitemap",
            id: 5,
            linkUrl: "/page-manager"
        },
        {
            title: "People Manager",
            icon: "users",
            id: 6,
            linkUrl: "/people-manager"
        },
        {
            title: "Settings",
            icon: "cogs",
            id: 7,
            linkUrl: "/settings"
        },
        {
            title: "Template Manager",
            icon: "file",
            id: 8,
            linkUrl: "/template-manager"
        },
        {
            title: "Manage Account",
            icon: "user-cog",
            id: 9,
            linkUrl: "/manage-account"
        }
    ]
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            return state;
    }
};

export default menuReducer;
