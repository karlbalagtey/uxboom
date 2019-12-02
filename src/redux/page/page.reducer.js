const INITIAL_STATE = {
    collections: [
        {
            title: "Home",
            icon: "faHome",
            id: 1,
            link_url: "/album-1"
        },
        {
            title: "Page 2",
            icon: "faGlobe",
            id: 2,
            link_url: "/album-2"
        },
        {
            title: "Page 3",
            icon: "faImage",
            id: 3,
            link_url: "/asset-manager"
        },
        {
            title: "Page 4",
            icon: "faCloudUploadAlt",
            id: 4,
            link_url: "/asset-upload"
        },
        {
            title: "Page 5",
            icon: "faSitemap",
            id: 5,
            link_url: "/page-manager"
        },
        {
            title: "People 6",
            icon: "faUsers",
            id: 6,
            link_url: "/people-manager"
        },
        {
            title: "Page 7",
            icon: "faCogs",
            id: 7,
            link_url: "/settings"
        },
        {
            title: "Page 8",
            icon: "faFile",
            id: 8,
            link_url: "/template-manager"
        },
        {
            title: "Page 9",
            icon: "faUserCog",
            id: 9,
            link_url: "/manage-account"
        }
    ]
};

const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default pageReducer;
