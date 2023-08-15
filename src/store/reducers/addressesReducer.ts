import { IAddress } from "@/interfaces/address.interface";
import api from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { logout } from "./userReducer";

interface IInitialStateAddressesSlice {
  loading: boolean;
  error: null | string;
  addresses: IAddress[];
}

export const fetchAddresses = createAsyncThunk(
  "address/fetch",
  async (_, { getState, dispatch }) => {
    try {
      const state = getState() as RootState;
      const response = await api.get(`address/`, {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      });

      const address = response.data;

      return address;
    } catch (err) {
      dispatch(logout());
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/delete",
  async (id: string, { getState, dispatch }) => {
    try {
      const state = getState() as RootState;

      const response = await api.delete(`address/${id}`, {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      });

      const address = response.data;

      dispatch(fetchAddresses());
      return address;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createAddress = createAsyncThunk(
  "address/create",
  async (body: IAddress, { getState, dispatch }) => {
    try {
      const state = getState() as RootState;

      const response = await api.post(
        `address`,
        JSON.parse(JSON.stringify(body)),
        {
          headers: { Authorization: `Bearer ${state.auth.token}` },
        }
      );

      const address = response.data;

      dispatch(fetchAddresses());

      return address;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: IInitialStateAddressesSlice = {
  loading: false,
  error: null,
  addresses: [],
};

const addressesSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddressesStart(state) {
      state.loading = true;
    },
    fetchAddressesSuccess(state, action) {
      state.loading = false;
      state.addresses = action.payload;
    },
    fetchAddressesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddresses.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.loading = false;
      state.addresses = action.payload;
    });
    builder.addCase(fetchAddresses.rejected, (state, action) => {
      state.loading = true;
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
    });
  },
});

export const {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} = addressesSlice.actions;

export default addressesSlice.reducer;
