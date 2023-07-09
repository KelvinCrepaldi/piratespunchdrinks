export interface ICreditCard {
  id: string;
  name: string;
  number: string;
  expiration_date: string;
}

export interface IInitialStateCreditCardsSlice {
  loading: boolean;
  error: null | Error;
  creditCards: ICreditCard[];
}
