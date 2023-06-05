import { login, logout } from "../reducers/authReducer";
import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../reducers/productsReducer";
import axios from "axios";
import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategoriesStart,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "../reducers/categoriesReducer";

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (credentials: { email: string; password: string }, { dispatch }) => {
    try {
      // Faça uma requisição para a API de autenticação
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );
      const { token, user } = response.data;
      // Retorne os dados para atualizar o estado de autenticação
      dispatch(login({ token, user }));
    } catch (error) {
      // Trate erros de autenticação, se houver
      console.log("Erro de autenticação:", error);
      // Você também pode lançar um erro para ser tratado pelo createAsyncThunk
      throw new Error("Erro de autenticação");
    }
  }
);
export const fetchProducts = () => {
  return async (dispatch: any) => {
    try {
      // Antes de buscar os produtos, atualize o estado para indicar que o carregamento está em andamento
      dispatch(fetchProductsStart());

      // Faça uma requisição para a API de busca de produtos
      const response = await axios.get(`http://localhost:3001/product`);
      const products = response.data;

      // Atualize o estado com a lista de produtos obtida
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      // Trate erros de busca de produtos, se houver
      dispatch(fetchProductsFailure("Erro ao buscar produtos"));
    }
  };
};
export const fetchProductsByCategory = (category: string) => {
  return async (dispatch: any) => {
    try {
      // Antes de buscar os produtos, atualize o estado para indicar que o carregamento está em andamento
      dispatch(fetchProductsStart());

      // Faça uma requisição para a API de busca de produtos
      const response = await axios.get(
        `http://localhost:3001/product/?category=${category}`
      );
      const products = response.data;

      // Atualize o estado com a lista de produtos obtida
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      // Trate erros de busca de produtos, se houver
      dispatch(fetchProductsFailure("Erro ao buscar produtos"));
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchCategoriesStart());

      const response = await axios.get("http://localhost:3001/category");
      const categories = response.data;

      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailure("Erro ao buscar produtos"));
    }
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    // Limpe o estado de autenticação ao fazer logout
    dispatch(logout());
  };
};
