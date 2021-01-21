import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    ui : uiReducer,
    product : productReducer,
    cart : cartReducer,
});

export default rootReducer;