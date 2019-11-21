const INITIAL_STATE = {
    collections: [
        {
            name: "Karl Marx",
            icon: "faHome",
            id: 1,
            linkUrl: "/album-1"
        },
        {
            name: "John Doe",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/album-2"
        },
        {
            name: "Joe Luiz",
            icon: "faImage",
            id: 3,
            linkUrl: "/asset-manager"
        },
        {
            name: "Caesar Montano",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/asset-upload"
        },
        {
            name: "Hana Montana",
            icon: "faSitemap",
            id: 5,
            linkUrl: "/page-manager"
        }
    ]
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
