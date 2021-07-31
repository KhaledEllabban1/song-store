import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import singerReducer from "./singer/singer.reducer"; 


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['singer']
}

const rootReducer = combineReducers({
    singer: singerReducer
});

export default persistReducer(persistConfig, rootReducer);