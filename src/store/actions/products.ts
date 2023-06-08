
import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../reducers/productsReducer";
import axios from "axios";

import {
  fetchCategoriesStart,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "../reducers/categoriesReducer";


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

