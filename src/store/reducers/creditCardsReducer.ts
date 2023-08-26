import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICreditCard } from "@/interfaces/creditCards.interface";
import api from "@/services";

export interface IInitialStateCreditCardsSlice {
  loading: boolean;
  error: null | string;
  creditCards: ICreditCard[];
}

const initialState: IInitialStateCreditCardsSlice = {
  loading: false,
  error: null,
  creditCards: [],
};

export const fetchCreditCards = createAsyncThunk(
  "creditCards/fetch",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;

      const response = await api.get("creditcard/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const creditCards = response.data;

      return creditCards;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

interface IUpdateCreditCards {
  creditCardId: string;
  creditCardParams: {
    name?: string;
    expiration_date?: string;
    number?: string;
  };
}

export const updateCreditCards = createAsyncThunk(
  "creditCard/update",
  async (data: IUpdateCreditCards, { getState, dispatch }) => {
    try {
      const state = getState() as RootState;

      console.log(data);

      const response = await api.patch(
        `/creditcard/${data.creditCardId}`,
        JSON.parse(JSON.stringify(data.creditCardParams)),
        {
          headers: { Authorization: `Bearer ${state.auth.token}` },
        }
      );

      dispatch(fetchCreditCards());

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

interface ICreateCreditCardsBody {
  name: string;
  number: number;
  expirationDate: string;
}

export const createCreditCards = createAsyncThunk(
  "creditCards/create",
  async (
    { name, number, expirationDate }: ICreateCreditCardsBody,
    { getState, dispatch }
  ) => {
    try {
      console.log(name);
      const state = getState() as RootState;
      const token = state.auth.token;

      const body = { name, number, expiration_date: expirationDate };

      await api.post("creditcard/", body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchCreditCards());
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

interface IDeleteCreditCardBody {
  id: string;
}

export const deleteCreditCard = createAsyncThunk(
  "creditCards/delete",
  async ({ id }: IDeleteCreditCardBody, { getState, dispatch }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;

      await api.delete(`creditcard/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchCreditCards());
    } catch (error) {
      throw error;
    }
  }
);

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreditCards.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCreditCards.fulfilled, (state, action) => {
      state.loading = false;
      state.creditCards = action.payload;
    });
    builder.addCase(fetchCreditCards.rejected, (state, action) => {
      state.loading = true;
      state.error =
        "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
    });
  },
});

export default creditCardsSlice.reducer;

export const {} = creditCardsSlice.actions;
