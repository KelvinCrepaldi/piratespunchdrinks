import {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../reducers/addressesReducer";
import { Dispatch } from "redux";
import { logout } from "../reducers/userReducer";
import api from "../../services/index";

export const fetchAddresses = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchAddressesStart());

      const response = await api.get(`address/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const address = response.data;

      dispatch(fetchAddressesSuccess(address));
    } catch (err) {
      console.log(err);
      dispatch(logout());
      dispatch(fetchAddressesFailure("Erro ao buscar endereços"));
    }
  };
};

export const deleteAddress = ({ token, addressId }: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await api.delete(`address/${addressId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchAddressesStart());

      const response = await api.get(`address/`, {
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

      await api.post(`address`, JSON.parse(JSON.stringify(body)), {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchAddresses(token));
    } catch (error) {
      console.log(error);
    }
  };
};
