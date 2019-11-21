const INITIAL_STATE = {
    collections: [
        {
            name: "Karl Marx",
            icon: "faHome",
            id: 1,
            linkUrl: "/user/karl-mark"
        },
        {
            name: "John Doe",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/user/john-doe"
        },
        {
            name: "Joe Luiz",
            icon: "faImage",
            id: 3,
            linkUrl: "/user/joe-luiz"
        },
        {
            name: "Caesar Montano",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/user/caesar-montano"
        },
        {
            name: "Hana Montana",
            icon: "faSitemap",
            id: 5,
            linkUrl: "/user/hana-montana"
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
