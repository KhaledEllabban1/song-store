import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import singerReducer from "./singer/singer.reducer"; 


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart', 'singer']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    singer: singerReducer
});

export default persistReducer(persistConfig, rootReducer);