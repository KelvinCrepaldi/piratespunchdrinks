import { IAddress } from "./address.interface";
import { IUser } from "./user.interface";

export interface IAddressesInitialState {
  loading: boolean;
  error: boolean | Error;
  addresses: IAddress[];
}

export interface IAuthInitialState {
  token: null | string;
  isAuthenticated: boolean;
  user: null | IUser;
}
