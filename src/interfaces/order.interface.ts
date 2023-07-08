import { IProduct } from "./product.interface";

export interface IOrder {
  id: string;
  created_at: Date;
  total: string;
  active_status: boolean;
  payment_status: boolean;
  expired: boolean;
  orderProducts: IProduct[];
}

export interface IInitialStateOrdersSlice {
  loading: boolean;
  error: boolean;
  orders: IOrder[];
}
