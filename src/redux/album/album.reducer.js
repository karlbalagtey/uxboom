const INITIAL_STATE = {
    collections: [
        {
            title: "Album 1",
            icon: "faHome",
            id: 1,
            linkUrl: "/album-1"
        },
        {
            title: "Album 2",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/album-2"
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

const albumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default albumReducer;
