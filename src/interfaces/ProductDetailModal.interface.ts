import { ReactNode } from "react";
import { IProduct } from "./product.interface";
export interface IProductDetailModal {
  product: IProduct;
  children: ReactNode;
}
