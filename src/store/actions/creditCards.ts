import {
  fetchCreditCardsFailure,
  fetchCreditCardsStart,
  fetchCreditCardsSuccess,
} from "../reducers/creditCardsReducer";
import { logout } from "../reducers/userReducer";
import api from "@/services";

export const createCreditCard = ({ token, body }: any) => {
  return async (dispatch: any) => {
    try {
      const request = await api.post(
        `creditcard/`,
        JSON.parse(JSON.stringify(body)),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCreditCard = ({ token, id }: any) => {
  return async (dispatch: any) => {
    try {
      const request = await api.delete(`creditcard/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
