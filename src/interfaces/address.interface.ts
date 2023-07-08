export interface IAddress {
  id: string;
  address: string;
  cep: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  user: any;
}

export interface IInitialStateAddressesSlice {
  loading: boolean;
  error: boolean | Error;
  addresses: IAddress[];
}
