import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import QuantityControlButton from "./QuantityControlButton";
import ActionBtn from "./ActionBtn";

export default function SidebarCart({ setShowCart, showCart }: any) {
  const cart: IProduct[] = useSelector((state: any) => state.cart.cartList);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div
        className={`${
          showCart ? "" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-black opacity-60 z-0 behind-main`}
        onClick={handleShowCart}
      ></div>
      <div className="w-full h-full max-h-full bg-slate-700 z-10 relative">
        <div className="flex justify-end">
          <button onClick={handleShowCart} className="m-1 p-2">
            X
          </button>
        </div>
        <div className="flex flex-col text-center max-h-full">
          <h1>Shopping cart</h1>

          <ul className="overflow-y-auto max-h-full">
            {cart.map((product: IProduct) => (
              <li key={product.id} className="p-2 m-2 border-b-2 border-black">
                <div className="flex">
                  <Image
                    src={product.img_url}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <div className="p-1 text-sm text-left">
                    <h1 className="text-lg">{product.name}</h1>
                    <p>{product.amount}</p>
                    <p>{product.category?.name}</p>
                  </div>
                </div>
                <div className="flex justify-center m-1">
                  <QuantityControlButton product={product} />
                </div>
              </li>
            ))}
          </ul>

          <div className="m-4 mb-20">
            <Link href="/cart" onClick={handleShowCart} className="m-4">
              <ActionBtn>Checkout</ActionBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
