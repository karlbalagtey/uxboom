const INITIAL_STATE = {
    collections: [
        {
            title: "Home",
            icon: "faHome",
            id: 1,
            linkUrl: "/album-1"
        },
        {
            title: "Page 2",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/album-2"
        },
        {
            title: "Page 3",
            icon: "faImage",
            id: 3,
            linkUrl: "/asset-manager"
        },
        {
            title: "Page 4",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/asset-upload"
        },
        {
            title: "Page 5",
            icon: "faSitemap",
            id: 5,
            linkUrl: "/page-manager"
        },
        {
            title: "People 6",
            icon: "faUsers",
            id: 6,
            linkUrl: "/people-manager"
        },
        {
            title: "Page 7",
            icon: "faCogs",
            id: 7,
            linkUrl: "/settings"
        },
        {
            title: "Page 8",
            icon: "faFile",
            id: 8,
            linkUrl: "/template-manager"
        },
        {
            title: "Page 9",
            icon: "faUserCog",
            id: 9,
            linkUrl: "/manage-account"
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
