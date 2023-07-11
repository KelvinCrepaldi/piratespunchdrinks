export interface IProductCategory {
  id: string;
  name: string;
}

export interface IProductCharacteristic {
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
  price: number;
  apresentation: string;
  active: boolean;
  amount: string;
  img_url: string;
  category: IProductCategory | null;
  characteristic: IProductCharacteristic[];
  aditional_info: IProductAditionalInfo[];
  qtd: number;
}

export interface IProductCard {
  product: IProduct;
  type: "big" | "small";
}
