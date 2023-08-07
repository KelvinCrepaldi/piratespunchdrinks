import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { IUser } from "@/interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import api from "@/services";

export interface IInitialStateAuthSlice {
  token: null | string;
  isAuthenticated: boolean;
  user: null | IUser;
  loginStatus: { loading: boolean; error: null | string };
  signupStatus: { loading: boolean; error: null | string };
}

let initialState: IInitialStateAuthSlice = {
  token: null,
  isAuthenticated: false,
  user: null,
  loginStatus: {
    loading: false,
    error: null,
  },
  signupStatus: {
    loading: false,
    error: null,
  },
};

if (typeof window !== "undefined") {
  const tokenLocalStorage = localStorage.getItem("PirateAPItoken");
  const userLocalStorage = localStorage.getItem("PirateAPIuser");

  initialState = {
    token: tokenLocalStorage ? JSON.parse(tokenLocalStorage) : null,
    isAuthenticated: !!tokenLocalStorage,
    user: userLocalStorage ? JSON.parse(userLocalStorage) : null,
    loginStatus: {
      loading: false,
      error: null,
    },
    signupStatus: {
      loading: false,
      error: null,
    },
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
    resetErrorMessages(state) {
      state.loginStatus.error = null;
      state.signupStatus.error = null;
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(authenticate.pending, (state, action) => {
      state.loginStatus.error = null;
      state.loginStatus.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loginStatus.error = null;
      state.loginStatus.loading = false;
      localStorage.setItem("PirateAPItoken", JSON.stringify(state.token));
      localStorage.setItem("PirateAPIuser", JSON.stringify(state.user));
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.token = null;
      state.user = null;
      state.loginStatus.loading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (action.error.code === "ERR_BAD_REQUEST") {
        state.loginStatus.error =
          "Nome de usuario ou senha incorretos, tente novamente.";
      } else {
        state.loginStatus.error =
          "Erro ao fazer login no servidor, tente novamente mais tarde.";
      }
    });

    // CREATE ACCOUNT
    builder.addCase(createAccount.pending, (state, action) => {
      state.signupStatus.loading = true;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.signupStatus.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loginStatus.error = null;
      state.loginStatus.loading = false;
      localStorage.setItem("PirateAPItoken", JSON.stringify(state.token));
      localStorage.setItem("PirateAPIuser", JSON.stringify(state.user));
    });
    builder.addCase(createAccount.rejected, (state, action) => {
      state.signupStatus.loading = false;
      if (action.error.code === "ERR_BAD_REQUEST") {
        state.signupStatus.error = "Erro ao criar usuario, email já cadastrado";
      }
      if (action.error.code === "ERR_NETWORK")
        state.signupStatus.error =
          "Houve um erro ao tentar conectar com o servidor, tente novamente mais tarde!";
    });
  },
});

export const { logout, resetErrorMessages } = authSlice.actions;
export default authSlice.reducer;
