import { IProduct } from "@/interfaces/product.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services";

interface IInitialStateProductsSlice {
  loading: boolean;
  error: string | null;
  products: IProduct[];
  searchWord: string;
  pagination: {
    count: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
  };
}

const initialState: IInitialStateProductsSlice = {
  loading: false,
  error: null,
  products: [],
  searchWord: "",
  pagination: {
    count: 0,
    currentPage: 1,
    nextPage: 0,
    prevPage: 0,
    lastPage: 0,
  },
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
    { search = "", category = "", take = "20", page = "1" }: IFetchProducts,
    thunkAPI
  ) => {
    try {
      console.log(category);
      const response = await api.get(
        `product/?&category=${category}` +
          `&search=${search}` +
          `&take=${take}` +
          `&page=${page}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchWord(state, action) {
      state.searchWord = action.payload;
    },
    clearSearchWord(state) {
      state.searchWord = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.products = [];
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
      state.pagination.count = action.payload.count;
      state.pagination.currentPage = action.payload.currentPage;
      state.pagination.lastPage = action.payload.lastPage;
      state.pagination.nextPage = action.payload.nextPage;
      state.pagination.prevPage = action.payload.prevPage;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;

export const { setSearchWord, clearSearchWord } = productsSlice.actions;
