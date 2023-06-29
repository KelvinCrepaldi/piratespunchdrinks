import axios from "axios";
import {
  fetchCreditCardsFailure,
  fetchCreditCardsStart,
  fetchCreditCardsSuccess,
} from "../reducers/creditCardsReducer";

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
      dispatch(fetchCreditCardsFailure(err));
    }
  };
};
