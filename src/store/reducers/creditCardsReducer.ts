import { IInitialStateCreditCardsSlice } from "@/interfaces/creditCards.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateCreditCardsSlice = {
  loading: false,
  error: null,
  creditCards: [],
};

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
});

export default creditCardsSlice.reducer;

export const {
  fetchCreditCardsStart,
  fetchCreditCardsSuccess,
  fetchCreditCardsFailure,
} = creditCardsSlice.actions;
