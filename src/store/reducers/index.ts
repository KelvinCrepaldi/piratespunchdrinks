import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;
