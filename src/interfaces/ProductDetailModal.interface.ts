import { ReactNode } from "react";
import { IProduct } from "./product.interface";
export interface IProductDetailModalProps {
  product: IProduct;
  children: ReactNode;
}
