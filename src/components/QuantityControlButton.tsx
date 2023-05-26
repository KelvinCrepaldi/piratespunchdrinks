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
    <div>
      <button onClick={handleAddToCart}>+</button>
      <div>{findProduct?.qtd}</div>
      <button onClick={handleRemoveItemToCart}>-</button>
    </div>
  );
}
