const INITIAL_STATE = {
    collections: [
        {
            title: "Album 1",
            icon: "faHome",
            id: 1,
            link_url: "/album-1"
        },
        {
            title: "Album 2",
            icon: "faGlobe",
            id: 2,
            link_url: "/album-2"
        },
        {
            title: "Asset Manager",
            icon: "faImage",
            id: 3,
            link_url: "/asset-manager"
        },
        {
            title: "Asset Upload",
            icon: "faCloudUploadAlt",
            id: 4,
            link_url: "/asset-upload"
        },
        {
            title: "Page Manager",
            icon: "faSitemap",
            id: 5,
            link_url: "/page-manager"
        },
        {
            title: "People Manager",
            icon: "faUsers",
            id: 6,
            link_url: "/people-manager"
        },
        {
            title: "Settings",
            icon: "faCogs",
            id: 7,
            link_url: "/settings"
        },
        {
            title: "Template Manager",
            icon: "faFile",
            id: 8,
            link_url: "/template-manager"
        },
        {
            title: "Manage Account",
            icon: "faUserCog",
            id: 9,
            link_url: "/manage-account"
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
