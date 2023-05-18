import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cartCount += 1;
      state.cartList = action.payload.cartList;
    },
    removeItemToCart(state, action) {
      state.cartCount -= 1;
      state.cartList = action.payload.cartList;
    },
  },
});

export const { addItemToCart, removeItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
