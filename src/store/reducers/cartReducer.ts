import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/product.interface";
import { IInitialstateCartSlice } from "@/interfaces/cart.interface";

const initialState: IInitialstateCartSlice = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const productIndex = state.cartList.findIndex(
        (e) => e.id === action.payload.product.id
      );

      if (productIndex !== -1) {
        state.cartList[productIndex].qtd += 1;
      } else {
        const newProduct = { ...action.payload.product, qtd: 1 };
        state.cartList.push(newProduct);
        state.cartCount += 1;
      }
    },
    removeItemToCart(state, action) {
      const productIndex = state.cartList.findIndex(
        (e) => e.id === action.payload.product.id
      );

      if (productIndex !== -1) {
        if (state.cartList[productIndex].qtd === 1) {
          state.cartList = state.cartList.filter(
            (e) => e.id !== action.payload.product.id
          );
          state.cartCount -= 1;
          return;
        }
        state.cartList[productIndex].qtd -= 1;
      }
    },
    deleteItemToCard(state, action) {
      state.cartList = state.cartList.filter(
        (product: IProduct) => product.id !== action.payload.product.id
      );
    },
  },
});

export const { addItemToCart, removeItemToCart, deleteItemToCard } =
  cartSlice.actions;

export default cartSlice.reducer;
