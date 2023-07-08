import {
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFailure,
} from "../reducers/ordersReducer";
import axios from "axios";
import { logoutUser } from "./user";
import { logout } from "../reducers/authReducer";

export const fetchOrders = ({ token }: any) => {
  return async (dispatch: any) => {
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
