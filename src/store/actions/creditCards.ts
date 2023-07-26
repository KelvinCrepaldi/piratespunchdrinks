import axios from "axios";
import {
  fetchCreditCardsFailure,
  fetchCreditCardsStart,
  fetchCreditCardsSuccess,
} from "../reducers/creditCardsReducer";
import { logout } from "../reducers/userReducer";

export const fetchCreditCards = (token: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchCreditCardsStart());

      const response = await axios.get("http://localhost:3001/creditcard", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const creditCards = response.data;

      dispatch(fetchCreditCardsSuccess(creditCards));
    } catch (err) {
      dispatch(logout());
      dispatch(fetchCreditCardsFailure(err));
    }
  };
};

export const createCreditCard = ({ token, body }: any) => {
  return async (dispatch: any) => {
    try {
      const request = await axios.post(
        `http://localhost:3001/creditcard`,
        JSON.parse(JSON.stringify(body)),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(fetchCreditCards(token));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCreditCard = ({ token, id }: any) => {
  return async (dispatch: any) => {
    try {
      const request = await axios.delete(
        `http://localhost:3001/creditcard/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(fetchCreditCards(token));
    } catch (error) {
      console.log(error);
    }
  };
};
