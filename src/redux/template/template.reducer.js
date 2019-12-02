const INITIAL_STATE = {
    collections: [
        {
            id: 1,
            name: "Home",
            description: "Homepage template for the main face of the website",
            file_name: "home",
            theme: "UXBoom",
            pages: [
                {
                    page_id: 1
                }
            ]
        },
        {
            id: 2,
            name: "Standard",
            description: "Standard template for basic layout",
            file_name: "standard",
            theme: "UXBoom",
            pages: [
                {
                    page_id: 3
                },
                {
                    page_id: 4
                },
                {
                    page_id: 5
                }
            ]
        },
        {
            id: 3,
            name: "List",
            description: "List template for listing child pages in a layout",
            file_name: "list",
            theme: "UXBoom",
            pages: [
                {
                    page_id: 6
                },
                {
                    page_id: 7
                }
            ]
        },
        {
            id: 4,
            name: "Search",
            description: "Search results layout",
            file_name: "search",
            theme: "UXBoom",
            pages: []
        },
        {
            id: 5,
            name: "Blog",
            description: "Blog page layout with author",
            file_name: "blog",
            theme: "UXBoom",
            pages:[]
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
