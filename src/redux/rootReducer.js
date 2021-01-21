import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    ui : uiReducer,
    product : productReducer,
    cart : cartReducer,
});
const persistConfig = {
    key : "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;