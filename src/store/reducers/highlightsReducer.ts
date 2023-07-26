import { IPromotion } from "@/interfaces/highlights.interface";
import { IProduct } from "@/interfaces/product.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IHighlightsInitialState {
  loading: boolean;
  error: null | string;
  promotionProducts: IPromotion[];
  //bestSeller
  //topRated
}

const initialState: IHighlightsInitialState = {
  loading: false,
  error: null,
  promotionProducts: [],
};

export const fetchPromotions = createAsyncThunk(
  "highlights/fetch",
  async (_, {}) => {
    const response = await axios.get("http://localhost:3001/promotion");
    const promotions = response.data;
    return promotions;
  }
);

const highlightSlice = createSlice({
  name: "highlights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPromotions.pending, (state, action) => {
      state.error = null;
      state.promotionProducts = [];
    });
    builder.addCase(fetchPromotions.fulfilled, (state, action) => {
      state.promotionProducts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPromotions.rejected, (state, action) => {
      action.error &&
        (state.error =
          "Houve um erro no servidor, tente novamente mais tarde!");
      state.loading = false;
    });
  },
});

export default highlightSlice.reducer;

export const {} = highlightSlice.actions;
