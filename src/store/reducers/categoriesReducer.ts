import { IInitialStateCategoriesSlice } from "@/interfaces/category.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateCategoriesSlice = {
  loading: false,
  error: null,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
