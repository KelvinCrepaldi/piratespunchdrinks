"use client";
import { fetchProducts } from "@/store/reducers/productsReducer";
import { RootState } from "@/store/store";
import { scrollToTop } from "@/utils/scrollToTop";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = (): JSX.Element => {
  const dispatch = useDispatch();
  const { lastPage, currentPage } = useSelector(
    (state: RootState) => state.products.pagination
  );

  const handlePage = (page: number) => {
    scrollToTop();
    dispatch(fetchProducts({ page: page.toString() }));
  };

  return (
    <div className="w-full m-5">
      {
        <ul className="flex w-full justify-center">
          {Array.from(Array(lastPage), (e, i) => {
            return (
              <li
                className={`border border-zinc-800 m-1 px-5 py-4 cursor-pointer leading-none rounded-full
                 bg-pirates-black-transparent-strong hover:bg-zinc-900
                    ${currentPage - 1 === i && "bg-slate-800"}
                 `}
                key={i}
                onClick={() => handlePage(i + 1)}
              >
                {i + 1}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};
