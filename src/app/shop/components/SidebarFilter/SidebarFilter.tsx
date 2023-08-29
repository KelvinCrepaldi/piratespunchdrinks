import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { fetchCategories } from "@/store/reducers/categoriesReducer";

import { ICategory } from "@/interfaces/category.interface";
import type {} from "redux-thunk/extend-redux";
import {
  fetchProducts,
  setCategoryWord,
} from "@/store/reducers/productsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export function SidebarFilter({
  handleShowMenu,
}: {
  handleShowMenu: () => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterByCategory = (category?: string): void => {
    dispatch(setCategoryWord(category));
  };

  return (
    <div className="mr-1 my-1  py-5 px-5 md:px-0 p-2  md:w-64 h-full border border-zinc-900  bg-pirates-shop-sidebar rounded relative lg:static z-10">
      <div className="flex justify-end lg:hidden">
        <button
          className="text-xl hover:text-pirates-gold p-1 mx-5"
          onClick={handleShowMenu}
        >
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
      </div>

      <h1 className="text-3xl m-2 p-1 border-b border-pirates-silver text-pirates-gold font-fredericka">
        Categorias
      </h1>

      <ul>
        {categories.map((category: ICategory) => (
          <li
            key={category.id}
            className="flex mx-6 justify-between font-fredericka  cursor-pointer my-1 hover:text-pirates-gold "
            onClick={() => filterByCategory(category.name)}
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
    </div>
  );
}
