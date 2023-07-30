import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IOrder } from "@/interfaces/order.interface";
import { IProduct } from "@/interfaces/product.interface";
import api from "@/services";

export interface IInitialStateOrdersSlice {
  loading: boolean;
  error: null | string;
  orders: IOrder[];
}

const initialState: IInitialStateOrdersSlice = {
  loading: false,
  error: null,
  orders: [],
};

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const response = await api.get("order/", {
      headers: { Authorization: `Bearer ${state.auth.token}` },
    });
    const orders = response.data;

    return orders;
  }
);

export const createOrder = createAsyncThunk(
  "orders/create",
  async ({ products, address, creditCard }: any, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    const productsListData = products?.map((product: IProduct) => {
      return { productId: product.id, quantity: product.qtd };
    });

    const bodyRequest = {
      products: productsListData,
      addressId: address.id,
      creditCardId: creditCard.id,
    };

    const response = await api.post(`order/`, bodyRequest, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const orders = response.data;

    return orders;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      action.error && (state.error = "Houve um erro no servidor");
      state.loading = false;
    });
  },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
