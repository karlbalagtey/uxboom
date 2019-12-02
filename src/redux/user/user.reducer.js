const INITIAL_STATE = {
    collections: [
        {
            name: "Karl Marx",
            icon: "faHome",
            id: 1,
            link_url: "/user/karl-mark"
        },
        {
            name: "John Doe",
            icon: "faGlobe",
            id: 2,
            link_url: "/user/john-doe"
        },
        {
            name: "Joe Luiz",
            icon: "faImage",
            id: 3,
            link_url: "/user/joe-luiz"
        },
        {
            name: "Caesar Montano",
            icon: "faCloudUploadAlt",
            id: 4,
            link_url: "/user/caesar-montano"
        },
        {
            name: "Hana Montana",
            icon: "faSitemap",
            id: 5,
            link_url: "/user/hana-montana"
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
