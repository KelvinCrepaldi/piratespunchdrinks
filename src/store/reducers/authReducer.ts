import { IAuthInitialState } from "@/interfaces/initialStateSlices.interface";
import { createSlice } from "@reduxjs/toolkit";

let initialState: IAuthInitialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

if (typeof window !== "undefined") {
  const tokenLocalStorage = localStorage.getItem("token");
  const userLocalStorage = localStorage.getItem("user");

  initialState = {
    token: tokenLocalStorage ? JSON.parse(tokenLocalStorage) : null,
    isAuthenticated: !!tokenLocalStorage,
    user: userLocalStorage ? JSON.parse(userLocalStorage) : null,
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
