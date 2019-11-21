import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import menuReducer from "./menu/menu.reducer";
import albumReducer from "./album/album.reducer";
import pageReducer from "./page/page.reducer";
import userReducer from "./user/user.reducer";
import userGroupReducer from "./user-group/user-group.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    menu: menuReducer,
    album: albumReducer,
    page: pageReducer,
    user: userReducer,
    userGroup: userGroupReducer
});

export default persistReducer(persistConfig, rootReducer);
