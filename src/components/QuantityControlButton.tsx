import { QuantityControlButtonProps } from "@/interfaces/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemToCart } from "@/store/reducers/cartReducer";
export default function QuantityControlButton({
  product,
}: QuantityControlButtonProps) {
  const { id }: IProduct = product;

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ cartList: [product, ...cart.cartList] }));
  };
  const removeItemToCart = () => {
    const cart = dispatch(addItemToCart({ cartList: product }));
  };

  return (
    <div>
      <button onClick={handleAddToCart}>+</button>
      <button>-</button>
    </div>
  );
}
