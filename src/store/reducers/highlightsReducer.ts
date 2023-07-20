import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  promotion: [],
};

const highlightSlice = createSlice({
  name: "highlights",
  initialState,
  reducers: {
    fetchPromotionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPromotionsSucces(state, action) {
      state.loading = false;
      state.promotion = action.payload;
    },
    fetchPromotionsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default highlightSlice.reducer;

export const {
  fetchPromotionsStart,
  fetchPromotionsSucces,
  fetchPromotionsFailure,
} = highlightSlice.actions;
