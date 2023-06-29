import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import ordersReducer from "./reducers/ordersReducer";
import addressesReducer from "./reducers/addressesReducer";
import creditCardsReducer from "./reducers/creditCardsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  addresses: addressesReducer,
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    addresses: addressesReducer,
    creditCards: creditCardsReducer,
  },
  middleware: [thunk],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
