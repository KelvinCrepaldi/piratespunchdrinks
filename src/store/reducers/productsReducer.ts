import { IProduct } from "@/interfaces/product.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services";
import { RootState } from "../store";

interface IInitialStateProductsSlice {
  loading: boolean;
  error: string | null;
  products: IProduct[];

  filter: {
    searchWord: string;
    category: string;
  };
  pagination: {
    count: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
  };
  control: {
    date: string;
    name: string;
    take: number;
    price: string;
  };
}

const initialState: IInitialStateProductsSlice = {
  loading: false,
  error: null,
  products: [],
  filter: {
    searchWord: "",
    category: "",
  },
  pagination: {
    count: 0,
    currentPage: 1,
    nextPage: 0,
    prevPage: 0,
    lastPage: 0,
  },
  control: {
    date: "",
    name: "ASC",
    price: "",
    take: 15,
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
  async ({ page = "1" }: IFetchProducts, { getState }) => {
    const state = getState() as RootState;
    try {
      const response = await api.get(
        `/product/list/?` +
          `&page=${page}` +
          `&category=${state.products.filter.category}` +
          `&search=${state.products.filter.searchWord}` +
          `&take=${state.products.control.take}` +
          `&date=${state.products.control.date}` +
          `&name=${state.products.control.name}` +
          `&price=${state.products.control.price}`
      );

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
      state.filter.searchWord = action.payload;
      state.filter.category = "";
    },
    clearSearchWord(state) {
      state.filter.searchWord = "";
    },
    setCategoryWord(state, action) {
      state.filter.category = action.payload;
      state.filter.searchWord = "";
    },
    clearCategoryWord(state) {
      state.filter.category = "";
    },
    setNameAsc(state) {
      state.control.name = "ASC";
      state.control.date = "";
      state.control.price = "";
    },
    setNameDesc(state) {
      state.control.name = "DESC";
      state.control.date = "";
      state.control.price = "";
    },
    setDateAsc(state) {
      state.control.date = "ASC";
      state.control.name = "";
      state.control.price = "";
    },
    setDateDesc(state) {
      state.control.date = "DESC";
      state.control.name = "";
      state.control.price = "";
    },
    setPriceAsc(state) {
      state.control.price = "ASC";
      state.control.name = "";
      state.control.date = "";
    },
    setPriceDesc(state) {
      state.control.price = "DESC";
      state.control.name = "";
      state.control.date = "";
    },
    setTakeQuantity(state) {
      state.control.take += 5;
      if (state.control.take > 35) state.control.take = 15;
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

export const {
  setSearchWord,
  clearSearchWord,
  setCategoryWord,
  clearCategoryWord,
  setNameAsc,
  setNameDesc,
  setDateAsc,
  setDateDesc,
  setPriceAsc,
  setPriceDesc,
  setTakeQuantity,
} = productsSlice.actions;
