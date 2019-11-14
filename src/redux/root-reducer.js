import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import menuReducer from "./menu/menu.reducer";
import albumReducer from "./album/album.reducer";
import pageReducer from "./page/page.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    menu: menuReducer,
    album: albumReducer,
    page: pageReducer
});

export default persistReducer(persistConfig, rootReducer);
