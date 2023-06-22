import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../reducers/authReducer";
import axios from "axios";

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (credentials: IAuthenticate, { dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );
      const { token, user } = response.data;

      dispatch(login({ token, user }));
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("Erro de autenticação:", error);
      throw new Error("Erro de autenticação.");
    }
  }
);

export const logoutUser = () => {
  return (dispatch: any) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
  };
};
