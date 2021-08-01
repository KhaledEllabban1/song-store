import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import singerReducer from "./singer/singer.reducer"; 
import userReducer from "./user/user.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['singer','user']
}

const rootReducer = combineReducers({
    singer: singerReducer,
    user : userReducer
});

export default persistReducer(persistConfig, rootReducer);