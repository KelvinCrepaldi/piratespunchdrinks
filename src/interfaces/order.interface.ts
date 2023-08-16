import { IAddress } from "./address.interface";
import { ICreditCard } from "./creditCards.interface";
import { IProduct } from "./product.interface";

enum PaymentStatus {
  Pending = "Pending",
  Authorized = "Authorized",
  Cancelled = "Cancelled",
}

export interface IOrder {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  total: string;
  active_status: boolean;
  paymentStatus: PaymentStatus;
  expired: boolean;
  orderProducts: IProduct[];
  creditCard?: ICreditCard;
  address: IAddress;
}
