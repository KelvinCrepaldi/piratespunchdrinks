import axios from "axios";
import {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} from "../reducers/addressesReducer";

export const fetchAddresses = (token: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAddressesStart());

      const response = await axios.get(`http://localhost:3001/address/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const address = response.data;

      dispatch(fetchAddressesSuccess(address));
    } catch (err) {
      console.log(err);
      dispatch(fetchAddressesFailure("Erro ao buscar endereços"));
    }
  };
};

export const deleteAddress = ({ token, addressId }: any) => {
  return async (dispatch: any) => {
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
