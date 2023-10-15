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
  "": "text-zinc-700",
  ASC: "text-green-300",
  DESC: "text-red-300",
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
    <div className="flex justify-end w-full  text-2xl max-w-[1080px]">
      {category && (
        <div
          className={`bg-pirates-black-transparent-strong text-lg rounded border border-zinc-800 mx-1 px-2`}
        >
          Buscando por categoria:{" "}
          <span className="text-pirates-gold">{category}</span>
          <button
            className="px-1 mt-1 ml-2 hover:text-red-400"
            onClick={() => dispatch(clearCategoryWord())}
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
      )}
      {searchWord && (
        <div
          className={`bg-pirates-black-transparent-strong text-lg rounded border border-zinc-800 mx-1 px-2`}
        >
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
        className="bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1"
        onClick={() => dispatch(setTakeQuantity())}
      >
        <p>{take}</p>
      </button>

      {name === "ASC" ? (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[name]}`}
          onClick={() => dispatch(setNameDesc())}
        >
          <FontAwesomeIcon icon={faArrowDownAZ}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[name]}`}
          onClick={() => dispatch(setNameAsc())}
        >
          <FontAwesomeIcon icon={faArrowDownZA}></FontAwesomeIcon>
        </button>
      )}

      {date === "ASC" ? (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[date]}`}
          onClick={() => dispatch(setDateDesc())}
        >
          <FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[date]}`}
          onClick={() => dispatch(setDateAsc())}
        >
          <FontAwesomeIcon icon={faCalendarMinus}></FontAwesomeIcon>
        </button>
      )}

      {price === "ASC" ? (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[price]}`}
          onClick={() => dispatch(setPriceDesc())}
        >
          <FontAwesomeIcon icon={faFilterCircleDollar}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className={`bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 ${buttonColors[price]}`}
          onClick={() => dispatch(setPriceAsc())}
        >
          <FontAwesomeIcon icon={faFilterCircleDollar}></FontAwesomeIcon>
        </button>
      )}
    </div>
  );
};
