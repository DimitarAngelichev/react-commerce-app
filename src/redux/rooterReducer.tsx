import { combineReducers } from "redux";

import productReducer from "./Product/product.reducer";

export default combineReducers({
    product: productReducer
});
