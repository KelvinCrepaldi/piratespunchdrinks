import { IInitialStateAddressesSlice } from "@/interfaces/address.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateAddressesSlice = {
  loading: false,
  error: false,
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
});

export const {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} = addressesSlice.actions;

export default addressesSlice.reducer;
