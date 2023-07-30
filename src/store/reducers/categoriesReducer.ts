import { ICategory } from "@/interfaces/category.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services";

export interface IInitialStateCategoriesSlice {
  loading: boolean;
  error: null | string;
  categories: ICategory[];
}

const initialState: IInitialStateCategoriesSlice = {
  loading: false,
  error: null,
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_) => {
    const response = await api.get("category/");
    const categories = response.data;
    return categories;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
      state.loading = false;
    });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
