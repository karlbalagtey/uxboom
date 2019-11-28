const INITIAL_STATE = {
    collections: [
        {
            title: "Super Users",
            icon: "faHome",
            id: 1,
            linkUrl: "/users/super-users",
            users: [
                {
                    userId: 1,
                    name: 'Superman'
                }
            ]
        },
        {
            title: "Administrators",
            icon: "faGlobe",
            id: 2,
            linkUrl: "/users/administrators",
            users: [
                {
                    userId: 2,
                    name: 'Karl Mark'
                }
            ]
        },
        {
            title: "Editor",
            icon: "faImage",
            id: 3,
            linkUrl: "/users/editor",
            users: [
                {
                    userId: 3,
                    name: 'Mark Balagtey'
                },
                {
                    userId: 4,
                    name: 'John Doe'
                }
            ]
        },
        {
            title: "UXB",
            icon: "faCloudUploadAlt",
            id: 4,
            linkUrl: "/users/uxb",
            users: [
                {
                    userId: 5,
                    name: 'Mary Jane'
                }
            ]
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