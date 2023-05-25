import { useSelector } from "react-redux";
export default function Cart() {
  const cartList = useSelector((state: any) => state.cart.cartList);
  return (
    <h1>
      {cartList.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </h1>
  );
}
