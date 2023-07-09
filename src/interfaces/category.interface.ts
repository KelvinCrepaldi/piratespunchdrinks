export interface ICategory {
  id: string;
  name: string;
  productCount: number;
}

export interface IInitialStateCategoriesSlice {
  loading: boolean;
  error: null | Error;
  categories: ICategory[];
}
