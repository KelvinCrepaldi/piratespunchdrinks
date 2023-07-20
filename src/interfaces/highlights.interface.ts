import { IProduct } from "./product.interface";

export interface IPromotion {
  createdAt: Date;
  finalDate: Date;
  id: string;
  initialDate: Date;
  type: string;
  value: number;
  products: IProduct[];
}
