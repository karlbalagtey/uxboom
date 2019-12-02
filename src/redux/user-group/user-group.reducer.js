const INITIAL_STATE = {
    collections: [
        {
            title: "Super Users",
            icon: "user-shield",
            id: 1,
            link_url: "/users/super-users",
            users: [
                {
                    user_id: 1,
                    name: 'Superman'
                }
            ]
        },
        {
            title: "Administrators",
            icon: "user-friends",
            id: 2,
            link_url: "/users/administrators",
            users: [
                {
                    user_id: 2,
                    name: 'Karl Mark'
                }
            ]
        },
        {
            title: "Editor",
            icon: "user-edit",
            id: 3,
            link_url: "/users/editor",
            users: [
                {
                    user_id: 3,
                    name: 'Mark Balagtey'
                },
                {
                    user_id: 4,
                    name: 'John Doe'
                }
            ]
        },
        {
            title: "UXB",
            icon: "user-cog",
            id: 4,
            link_url: "/users/uxb",
            users: [
                {
                    user_id: 5,
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