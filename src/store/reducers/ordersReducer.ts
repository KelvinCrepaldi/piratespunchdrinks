import { IInitialStateOrdersSlice } from "@/interfaces/order.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateOrdersSlice = {
  loading: false,
  error: false,
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrderStart(state) {
      state.loading = true;
      state.error = false;
    },
    fetchOrderSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure } =
  ordersSlice.actions;

export default ordersSlice.reducer;
