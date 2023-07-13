import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "@/store/actions/products";
import { ICategory } from "@/interfaces/category.interface";
import ProductCard from "./ProductCard";
import type {} from "redux-thunk/extend-redux";

export default function SidebarFilter() {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterByCategory = (category: string) => {
    dispatch(fetchProductsByCategory(category));
  };

  const handleFetchAllProducts = () => {
    dispatch(fetchProducts());
  };

  return (
    <div className="  py-5 px-5 md:px-0 md:w-64 border border-black lg:border-transparent bg-neutral-950 p-2 m-3 rounded-2xl ">
      <h1 className="text-xl m-2 p-1 border-b border-pirates-silver text-pirates-gold ">
        Product Categories
      </h1>

      <ul>
        <li
          key={"fetch-all"}
          className="flex mx-6 justify-between font-fredericka  cursor-pointer my-1 hover:text-pirates-gold "
          onClick={() => handleFetchAllProducts()}
        >
          <span className="">All products</span>
          <div className="flex-grow border-b border-dashed border-pirates-silver"></div>

          <span>
            {"("}
            all
            {")"}
          </span>
        </li>
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
    </div>
  );
}
