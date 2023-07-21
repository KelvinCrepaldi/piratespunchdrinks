import { QuantityControlButtonProps } from "@/interfaces/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import {
  addItemToCart,
  deleteItemToCard,
  removeItemToCart,
} from "@/store/reducers/cartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function QuantityControlButton({
  product,
}: QuantityControlButtonProps) {
  const dispatch = useAppDispatch();
  const cartList: IProduct[] = useSelector((state: any) => state.cart.cartList);
  const findProduct = cartList.find((e: IProduct) => e.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ product }));
  };
  const handleRemoveItemToCart = () => {
    dispatch(removeItemToCart({ product }));
  };

  const handleClearItemToCard = () => {
    dispatch(deleteItemToCard({ product }));
  };

  return (
    <div className="flex  items-center">
      <button
        className=" p-2  bg-pirates-red hover:bg-pirates-gold hover:text-black border-r border-pirates-black px-3 rounded-l-lg"
        onClick={handleAddToCart}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="bg-pirates-white w-12 p-2 px-3 text-center font-pirata text-pirates-black">
        {findProduct?.qtd ? findProduct?.qtd : "0"}
      </div>
      <button
        className=" p-2  bg-pirates-red hover:bg-pirates-gold hover:text-black border-l px-3 border-pirates-black "
        onClick={handleRemoveItemToCart}
      >
        <FontAwesomeIcon className="" icon={faMinus} />
      </button>
      <button
        className="p-2  bg-pirates-red hover:bg-pirates-gold hover:text-black border-l px-3 border-pirates-black rounded-r-lg"
        onClick={handleClearItemToCard}
      >
        <FontAwesomeIcon className="" icon={faTrash} />
      </button>
    </div>
  );
}
