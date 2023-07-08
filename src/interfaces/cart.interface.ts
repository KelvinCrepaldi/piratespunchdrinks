import { IProduct } from "./product.interface";

export interface IInitialstateCartSlice {
  cartList: IProduct[];
  cartCount: number;
}
