import Link from "next/link";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "@/store/actions";
import { ICategory } from "@/interfaces/category.interface";
import ProductCard from "./ProductCard";
import type {} from "redux-thunk/extend-redux";

export default function ShopFilter() {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterByCategory = (category: string) => {
    dispatch(fetchProductsByCategory(category));
  };

  return (
    <div className=" bg-pirates-black md:bg-transparent py-5 px-5 md:px-0 md:w-56 border-r-2 md:border-0 border-pirates-red">
      <h1 className="text-xl m-2 p-1 border-b border-pirates-silver text-pirates-gold ">
        Product Categories
      </h1>

      <ul>
        {categories.map((category: ICategory) => (
          <li
            key={category.id}
            className="flex mx-6 justify-between font-fredericka  cursor-pointer my-1 hover:text-pirates-gold "
            onClick={() => handleFilterByCategory(category.name)}
          >
            <span className=" ">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </span>
            <div className="w-full border-b border-dashed border-pirates-silver"></div>
            <span>
              {"("}
              {category.productCount}
              {")"}
            </span>
          </li>
        ))}
      </ul>

      <h1 className="text-xl m-2 p-1 border-b border-pirates-silver text-pirates-gold">
        Filter by Price
      </h1>
      <div className="flex mx-6 justify-between font-fredericka  cursor-pointer my-1 hover:text-pirates-gold ">
        Price: xxxx - xxxxx <button>filter</button>
      </div>

      <h1 className="text-xl m-2 p-1 border-b border-pirates-silver text-pirates-gold">
        Best Seller
      </h1>
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
          type="small"
        ></ProductCard>
      ))}
    </div>
  );
}
