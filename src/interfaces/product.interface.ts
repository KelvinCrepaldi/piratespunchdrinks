export interface IProductCategory {
  id: string;
  name: string;
}

export interface IproductCharacteristic {
  id: string;
  text: string;
}

export interface IProductAditionalInfo {
  id: string;
  text: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: string;
  apresentation: string;
  active: boolean;
  amount: string;
  img_url: string;
  category: IProductCategory | null;
  characteristic?: IproductCharacteristic[];
  additional_info?: IProductAditionalInfo[];
}

export interface IProductCard {
  product: IProduct;
  type: "big" | "small";
}
