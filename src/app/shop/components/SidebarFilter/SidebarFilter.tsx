"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { fetchCategories } from "@/store/reducers/categoriesReducer";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ICategory } from "@/interfaces/category.interface";
import type {} from "redux-thunk/extend-redux";
import { setCategoryWord } from "@/store/reducers/productsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export function SidebarFilter(): JSX.Element {
  const [showMenu, setShowMenu] = useState(true);
  const dispatch = useAppDispatch();
  const categories = useSelector((state: any) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterByCategory = (category?: string): void => {
    dispatch(setCategoryWord(category));
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <button
        onClick={handleShowMenu}
        className="lg:hidden absolute w-9 h-9 rounded bg-zinc-100 shadow mx-1 top-1 left-0 "
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <section
        className={`absolute  ${
          showMenu === false ? "-left-full" : "left-0"
        } lg:relative lg:left-0 transition-all`}
      >
        <div className="mr-1 my-1  py-5 px-5 md:px-0 p-2  md:w-64 h-full bg-zinc-100 rounded relative lg:static z-10">
          <div className="flex justify-end lg:hidden">
            <button
              className="text-xl hover:text-pirates-gold p-1 mx-5"
              onClick={handleCloseMenu}
            >
              <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
          </div>

          <h4 className="m-2 p-1 border-b border-pirates-red-strong text-pirates-red-strong font-pirata">
            Categorias
          </h4>

          <ul>
            {categories.map((category: ICategory) => (
              <li
                key={category.id}
                className="flex px-5 justify-between cursor-pointer hover:bg-zinc-200 p-1"
                onClick={() => filterByCategory(category.name)}
              >
                <p className="text-black">
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </p>

                <p className="text-black">
                  {"("}
                  {category.productCount}
                  {")"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
