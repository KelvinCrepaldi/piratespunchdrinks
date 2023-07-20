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
import highlightsReducer from "./reducers/highlightsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  addresses: addressesReducer,
  creditCards: creditCardsReducer,
  highlights: highlightsReducer,
});

export interface RootState {
  auth: ReturnType<typeof authReducer>;
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
  categories: ReturnType<typeof categoriesReducer>;
  orders: ReturnType<typeof ordersReducer>;
  addresses: ReturnType<typeof addressesReducer>;
  creditCards: ReturnType<typeof creditCardsReducer>;
  highlights: ReturnType<typeof highlightsReducer>;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    addresses: addressesReducer,
    creditCards: creditCardsReducer,
    highlights: highlightsReducer,
  },
  middleware: [thunk],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
