const INITIAL_STATE = {
    collections: [
        {
            id: 1,
            name: "Home",
            description: "",
            fileName: "home",
            theme: "UXBoom"
        },
        {
            id: 2,
            name: "Standard",
            description: "",
            fileName: "standard",
            theme: "UXBoom"
        },
        {
            id: 3,
            name: "List",
            description: "",
            fileName: "",
            theme: "UXBoom"
        },
        {
            id: 4,
            name: "Search",
            description: "",
            fileName: "search",
            theme: "UXBoom"
        },
        {
            id: 5,
            name: "Blog",
            description: "",
            fileName: "blog",
            theme: "UXBoom"
        }
    ]
};

const templateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default templateReducer;
