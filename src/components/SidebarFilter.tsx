import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { fetchCategories } from "@/store/reducers/categoriesReducer";

import { ICategory } from "@/interfaces/category.interface";
import type {} from "redux-thunk/extend-redux";

export default function SidebarFilter() {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mr-1 my-1  py-5 px-5 md:px-0 p-2  md:w-64 h-full border border-black lg:border-transparent bg-pirates-black-transparent rounded relative lg:static z-10">
      <h1 className="text-xl m-2 p-1 border-b border-pirates-silver text-pirates-gold ">
        Product Categories
      </h1>

      <ul>
        <li
          key={"fetch-all"}
          className="flex mx-6 justify-between font-fredericka  cursor-pointer my-1 hover:text-pirates-gold "
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
