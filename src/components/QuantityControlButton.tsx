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
    <div className="flex bg-pirates-red w-28 rounded justify-between">
      <button
        className="px-3 text-center hover:text-pirates-gold"
        onClick={handleAddToCart}
      >
        +
      </button>
      <div className="w-12 h-7 m-1 bg-pirates-silver text-center text-pirates-black font-pirata text-xl">
        {findProduct?.qtd}
      </div>
      <button
        className="px-3 text-center hover:text-pirates-gold"
        onClick={handleRemoveItemToCart}
      >
        -
      </button>
    </div>
  );
}
