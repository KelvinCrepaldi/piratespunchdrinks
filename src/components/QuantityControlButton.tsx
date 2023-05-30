import { QuantityControlButtonProps } from "@/interfaces/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemToCart } from "@/store/reducers/cartReducer";
export default function QuantityControlButton({
  product,
}: QuantityControlButtonProps) {
  const dispatch = useDispatch();
  const cartList: IProduct[] = useSelector((state: any) => state.cart.cartList);
  const findProduct = cartList.find((e: IProduct) => e.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ product }));
  };
  const handleRemoveItemToCart = () => {
    dispatch(removeItemToCart({ product }));
  };

  return (
    <div className="flex  items-center">
      <button
        className=" p-2 w-12 bg-pirates-red border-r border-pirates-black px-3 rounded-l-lg"
        onClick={handleAddToCart}
      >
        +
      </button>
      <div className="bg-pirates-silver w-12 p-2 px-3 text-center font-pirata text-pirates-black">
        {findProduct?.qtd ? findProduct?.qtd : "0"}
      </div>
      <button
        className=" p-2 w-12 bg-pirates-red border-l px-3 border-pirates-black rounded-r-lg"
        onClick={handleRemoveItemToCart}
      >
        -
      </button>
    </div>
  );
}
