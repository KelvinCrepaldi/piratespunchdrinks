import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IOrder } from "@/interfaces/order.interface";
import { IProduct } from "@/interfaces/product.interface";
import api from "@/services";
import { useRouter } from "next/router";

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
    try {
      const state = getState() as RootState;
      const response = await api.get("/order/", {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      });
      const orders = response.data;

      return orders;
    } catch (error) {
      throw error;
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/create",
  async ({ products, address, creditCard }: any, { getState }) => {
    try {
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

      const response = await api.post(`/order/`, bodyRequest, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response;
    } catch (error) {
      throw error;
    }
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
      if (action.error.code === "400") {
        state.error =
          "É necessario um cartão de crédito e um endereço válido, por favor tente novamente";
      } else {
        state.error = "Erro ao tentar comunicar-se com o servidor.";
      }
      state.loading = false;
    });

    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.error = "";
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      if (action.error.code === "ERR_BAD_REQUEST") {
        state.error =
          "É necessario um cartão de crédito e um endereço válido, por favor tente novamente";
      } else {
        state.error = "Erro ao tentar comunicar-se com o servidor.";
      }
    });
  },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
