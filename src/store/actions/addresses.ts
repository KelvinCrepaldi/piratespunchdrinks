import axios from "axios";
import {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../reducers/addressesReducer";
import { Dispatch } from "redux";
import { logoutUser } from "./user";

export const fetchAddresses = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchAddressesStart());

      const response = await axios.get(`http://localhost:3001/address/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const address = response.data;

      dispatch(fetchAddressesSuccess(address));
    } catch (err) {
      console.log(err);
      dispatch(logoutUser());
      dispatch(fetchAddressesFailure("Erro ao buscar endereços"));
    }
  };
};

export const deleteAddress = ({ token, addressId }: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/address/${addressId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchAddressesStart());

      const response = await axios.get(`http://localhost:3001/address/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const address = response.data;

      dispatch(fetchAddressesSuccess(address));
    } catch (err) {
      console.log(err);
      dispatch(fetchAddressesFailure("Erro ao deletar endereço"));
    }
  };
};

export const createAddress = ({ token, body }: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const jsonBody = JSON.stringify(body);
      console.log(jsonBody);

      await axios.post(
        `http://localhost:3001/address`,
        JSON.parse(JSON.stringify(body)),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(fetchAddresses(token));
    } catch (error) {
      console.log(error);
    }
  };
};
