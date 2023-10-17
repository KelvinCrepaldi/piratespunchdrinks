"use client";
import {
  clearCategoryWord,
  clearSearchWord,
  setDateAsc,
  setDateDesc,
  setNameAsc,
  setNameDesc,
  setPriceAsc,
  setPriceDesc,
  setTakeQuantity,
} from "@/store/reducers/productsReducer";
import { RootState } from "@/store/store";
import {
  faArrowDownAZ,
  faArrowDownZA,
  faCalendarMinus,
  faCalendarPlus,
  faClose,
  faFilterCircleDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";

const buttonColors: any = {
  "": "text-zinc-700 hover:text-zinc-500",
  ASC: "text-green-600 hover:text-green-500",
  DESC: "text-red-600 hover:text-red-500",
};

export const Control = () => {
  const dispatch = useAppDispatch();
  const { category, searchWord } = useSelector(
    (state: RootState) => state.products.filter
  );
  const { date, name, take, price } = useSelector(
    (state: RootState) => state.products.control
  );
  return (
    <div className="flex justify-end w-full  text-2xl max-w-[1080px] mt-1">
      {category && (
        <div
          className={`relative text-lg rounded bg-zinc-300 shadow mx-1 px-2`}
        >
          Buscando por categoria:{" "}
          <span className="text-pirates-red-strong">{category}</span>
          <button
            className="px-1 mt-1 ml-2 hover:text-pirates-red-strong"
            onClick={() => dispatch(clearCategoryWord())}
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
      )}
      {searchWord && (
        <div className={`text-lg rounded border bg-zinc-300 shadow mx-1 px-2`}>
          Buscando por palavra:{" "}
          <span className="text-pirates-gold">{searchWord}</span>
          <button
            className="px-1 mt-1 ml-2 hover:text-red-400"
            onClick={() => dispatch(clearSearchWord())}
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
      )}

      <button
        className="relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 "
        onClick={() => dispatch(setTakeQuantity())}
      >
        <p className="text-green-600 font-bold hover:text-green-500">{take}</p>
      </button>

      {name === "ASC" ? (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[name]}`}
          onClick={() => dispatch(setNameDesc())}
        >
          <FontAwesomeIcon icon={faArrowDownAZ}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[name]}`}
          onClick={() => dispatch(setNameAsc())}
        >
          <FontAwesomeIcon icon={faArrowDownZA}></FontAwesomeIcon>
        </button>
      )}

      {date === "ASC" ? (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[date]}`}
          onClick={() => dispatch(setDateDesc())}
        >
          <FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[date]}`}
          onClick={() => dispatch(setDateAsc())}
        >
          <FontAwesomeIcon icon={faCalendarMinus}></FontAwesomeIcon>
        </button>
      )}

      {price === "ASC" ? (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[price]}`}
          onClick={() => dispatch(setPriceDesc())}
        >
          <FontAwesomeIcon icon={faFilterCircleDollar}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`relative w-9 h-9 rounded bg-zinc-300 shadow mx-1 ${buttonColors[price]}`}
          onClick={() => dispatch(setPriceAsc())}
        >
          <FontAwesomeIcon icon={faFilterCircleDollar}></FontAwesomeIcon>
        </button>
      )}
    </div>
  );
};
