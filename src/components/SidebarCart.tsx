import { useState, useEffect } from "react";
import Link from "next/link";
import NextLink from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import QuantityControlButton from "./QuantityControlButton";
import ActionBtn from "./ActionBtn";
import { ISidebarCart } from "@/interfaces/sidebarCart.interface";

export default function SidebarCart({
  handleShowCart,
  showCart,
}: ISidebarCart) {
  const cart: IProduct[] = useSelector((state: any) => state.cart.cartList);
  const { user, isAuthenticated } = useSelector((state: any) => state.auth);

  // Use o estado local para controlar a exibição do conteúdo do usuário
  const [showUserContent, setShowUserContent] = useState(false);

  // Verifique a autenticação do usuário no lado do cliente
  useEffect(() => {
    setShowUserContent(isAuthenticated);
  }, [isAuthenticated]);

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
          {!showUserContent ? (
            <div className="text-red-300">
              User not connected, please{" "}
              <Link
                href={"/login"}
                onClick={handleShowCart}
                className="text-blue-500"
              >
                log in?
              </Link>
            </div>
          ) : (
            <h4>
              User <span className="text-green-200">{user?.name}</span>
            </h4>
          )}

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
