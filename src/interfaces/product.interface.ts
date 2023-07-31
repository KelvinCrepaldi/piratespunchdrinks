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
  code: string;
  name: string;
  price: string;
  apresentation: string;
  active: boolean;
  amount: string;
  img_url: string;
  category: IProductCategory | null;
  characteristic: IProductCharacteristic[];
  aditional_info: IProductAditionalInfo[];
  qtd: number;
}

export interface IProductCard extends React.HTMLProps<HTMLDivElement> {
  key: any;
  product: IProduct;
  type?: string;
}
