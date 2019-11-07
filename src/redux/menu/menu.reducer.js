import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
    collapsed: false,
    items: [
        {
            title: "Dashboard",
            icon: "faHome",
            id: 1,
            linkUrl: "/dashboard"
        },
        {
            title: "Edit Site",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/edit-site"
        },
        {
            title: "Asset Manager",
            icon: "faImage",
            id: 3,
            linkUrl: "/asset-manager"
        },
        {
            title: "Asset Upload",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/asset-upload"
        },
        {
            title: "Page Manager",
            icon: "faSitemap",
            id: 5,
            linkUrl: "/page-manager"
        },
        {
            title: "People Manager",
            icon: "faUsers",
            id: 6,
            linkUrl: "/people-manager"
        },
        {
            title: "Settings",
            icon: "faCogs",
            id: 7,
            linkUrl: "/settings"
        },
        {
            title: "Template Manager",
            icon: "faFile",
            id: 8,
            linkUrl: "/template-manager"
        },
        {
            title: "Manage Account",
            icon: "faUserCog",
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
