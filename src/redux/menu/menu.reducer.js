import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
    collapsed: false,
    items: [
        {
            title: "Dashboard",
            icon: "home",
            id: 1,
            link_url: "/dashboard"
        },
        {
            title: "Edit Site",
            icon: "globe",
            id: 2,
            link_url: "/edit-site"
        },
        {
            title: "Asset Manager",
            icon: "image",
            id: 3,
            link_url: "/asset-manager"
        },
        {
            title: "Asset Upload",
            icon: "cloud-upload-alt",
            id: 4,
            link_url: "/asset-upload"
        },
        {
            title: "Page Manager",
            icon: "sitemap",
            id: 5,
            link_url: "/page-manager"
        },
        {
            title: "People Manager",
            icon: "users",
            id: 6,
            link_url: "/people-manager"
        },
        {
            title: "Settings",
            icon: "cogs",
            id: 7,
            link_url: "/settings"
        },
        {
            title: "Template Manager",
            icon: "file",
            id: 8,
            link_url: "/template-manager"
        },
        {
            title: "Manage Account",
            icon: "user-cog",
            id: 9,
            link_url: "/manage-account"
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
