export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  adm: boolean;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  orders: any;
  address: any;
  credit_card: any;
}
