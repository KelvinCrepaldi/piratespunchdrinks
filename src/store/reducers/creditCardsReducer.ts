import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICreditCard } from "@/interfaces/creditCards.interface";
import api from "@/services";

export interface IInitialStateCreditCardsSlice {
  loading: boolean;
  error: null | string;
  creditCards: ICreditCard[];
}

const initialState: IInitialStateCreditCardsSlice = {
  loading: false,
  error: null,
  creditCards: [],
};

export const fetchCreditCards = createAsyncThunk(
  "creditCards/fetch",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    const response = await api.get("creditcard/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const creditCards = response.data;

    return creditCards;
  }
);

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    fetchCreditCardsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCreditCardsSuccess(state, action) {
      state.loading = false;
      state.creditCards = action.payload;
    },
    fetchCreditCardsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreditCards.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCreditCards.fulfilled, (state, action) => {
      state.loading = false;
      state.creditCards = action.payload;
    });
    builder.addCase(fetchCreditCards.rejected, (state, action) => {
      state.loading = true;
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
    });
  },
});

export default creditCardsSlice.reducer;

export const {
  fetchCreditCardsStart,
  fetchCreditCardsSuccess,
  fetchCreditCardsFailure,
} = creditCardsSlice.actions;
