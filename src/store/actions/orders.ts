import {
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFailure,
} from "../reducers/ordersReducer";
import axios from "axios";
import { logoutUser } from "./user";
import { logout } from "../reducers/authReducer";
import { Dispatch } from "redux";
import { IProduct } from "@/interfaces/product.interface";

export const fetchOrders = ({ token }: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchOrderStart());

      const response = await axios.get(`http://localhost:3001/order/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const orders = response.data;

      dispatch(fetchOrderSuccess(orders));
    } catch (err) {
      dispatch(logoutUser());
      dispatch(fetchOrderFailure(err));
    }
  };
};

export const createOrder = (
  token: any,
  products: any,
  address: any,
  creditCard: any
) => {
  return async (dispatch: Dispatch) => {
    const productsListData = products?.map((product: IProduct) => {
      return { productId: product.id, quantity: product.qtd };
    });

    const bodyRequest = {
      products: productsListData,
      addressId: address,
      creditCardId: creditCard,
    };

    try {
      const response = await axios.post(
        `http://localhost:3001/order/`,
        bodyRequest,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response);

      fetchOrders(token);
    } catch (err) {
      console.log(err);
    }
  };
};
