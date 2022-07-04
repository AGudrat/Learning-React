import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";
import productListReducer from "../reducers/productListReduces";
import cartReducer from "../reducers/cartReducer";
const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducer;