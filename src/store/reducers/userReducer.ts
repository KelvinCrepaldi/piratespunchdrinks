import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { IUser } from "@/interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import api from "@/services";

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
    const response = await api.post("login/", credentials);
    return response.data;
  }
);

interface ICreateAccountBody {
  name: string;
  email: string;
  password: string;
}

export const createAccount = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }: ICreateAccountBody, thunkAPI) => {
    const body = { name, email, password };
    try {
      const response = await api.post("/users/", body);
      if (response.status === 200) {
        console.log("user created");
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "user/logout",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;

    const token = state.auth.token;
    const response = await api.delete("users/", {
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
    builder.addCase(createAccount.fulfilled, (state, action) => {});
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
