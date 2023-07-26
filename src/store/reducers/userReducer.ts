import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { IUser } from "@/interfaces/user.interface";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootProps } from "postcss";
import { RootState } from "../store";
import { headers } from "next/dist/client/components/headers";

export interface IInitialStateAuthSlice {
  token: null | string;
  isAuthenticated: boolean;
  user: null | IUser;
  error: any;
}

let initialState: IInitialStateAuthSlice = {
  token: null,
  isAuthenticated: false,
  user: null,
  error: null,
};

if (typeof window !== "undefined") {
  const tokenLocalStorage = localStorage.getItem("PirateAPItoken");
  const userLocalStorage = localStorage.getItem("PirateAPIuser");

  initialState = {
    token: tokenLocalStorage ? JSON.parse(tokenLocalStorage) : null,
    isAuthenticated: !!tokenLocalStorage,
    user: userLocalStorage ? JSON.parse(userLocalStorage) : null,
    error: null,
  };
}

export const authenticate = createAsyncThunk(
  "user/authenticate",
  async (credentials: IAuthenticate) => {
    const response = await axios.post(
      "http://localhost:3001/login",
      credentials
    );
    return response.data;
  }
);

export const deleteAccount = createAsyncThunk(
  "user/logout",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;

    const token = state.auth.token;
    const response = await axios.delete("http://localhost:3001/users", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(logout());

    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("PirateAPItoken");
      localStorage.removeItem("PirateAPIuser");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
      localStorage.setItem("PirateAPItoken", JSON.stringify(state.token));
      localStorage.setItem("PirateAPIuser", JSON.stringify(state.user));
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (action.error.code === "ERR_BAD_REQUEST") {
        state.error = "Nome de usuario ou senha incorretos, tente novamente.";
      } else {
        state.error =
          "Erro ao fazer login no servidor, tente novamente mais tarde.";
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
