import { IProduct } from "@/interfaces/product.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services";

interface IInitialStateProductsSlice {
  loading: boolean;
  error: string | null;
  products: IProduct[];
}

const initialState: IInitialStateProductsSlice = {
  loading: false,
  error: null,
  products: [],
};

interface IFetchProducts {
  search?: string;
  category?: string;
  page?: string;
  take?: string;
}

/* ?${keyword ? "keyword=" + keyword : ""}&${
  page ? "page=" + page : ""
}&${take ? "take=" + take : ""}& */

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (
    { search = "", category = "", take = "12", page = "1" }: IFetchProducts,
    thunkAPI
  ) => {
    try {
      console.log(category);
      const response = await api.get(
        `product/?&category=${category}` + `&search=${search}`
      );
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.products = [];
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;

export const {} = productsSlice.actions;
