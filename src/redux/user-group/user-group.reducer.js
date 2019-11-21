const INITIAL_STATE = {
    collections: [
        {
            title: "Super Users",
            icon: "faHome",
            id: 1,
            linkUrl: "/users/super-users"
        },
        {
            title: "Administrators",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/users/administrators"
        },
        {
            title: "Editor",
            icon: "faImage",
            id: 3,
            linkUrl: "/users/editor"
        },
        {
            title: "UXB",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/users/uxb"
        }
    ]
};

const userGroupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userGroupReducer;