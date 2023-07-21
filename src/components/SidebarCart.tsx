import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import QuantityControlButton from "./QuantityControlButton";
import ActionBtn from "./ActionBtn";
import { ISidebarCart } from "@/interfaces/sidebarCart.interface";
import formatReal from "@/utils/formatReal";
import { RootState } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function SidebarCart({
  handleShowCart,
  showCart,
}: ISidebarCart) {
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartList
  );
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
        } fixed top-0 left-0 w-full h-screen bg-black opacity-60 behind-main`}
        onClick={handleShowCart}
      ></div>
      <div className="w-full h-full max-h-full bg-pirates-black relative ">
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
            {cart.length ? (
              cart.map((product: IProduct) => {
                const totalValue = product.qtd * parseFloat(product.price);
                return (
                  <li
                    key={product.id}
                    className="p-2 m-2 border-black border-t"
                  >
                    <div className="flex">
                      <Image
                        src={product.img_url}
                        alt={product.name}
                        width={100}
                        height={100}
                      />
                      <div className="px-2 text-left">
                        <h1 className="text-lg">{product.name}</h1>
                        <p className="font-inter text-base">{product.amount}</p>
                        <p className="font-inter text-base">
                          {product.category?.name}
                        </p>
                        <p className="font-inter text-base">
                          {formatReal(totalValue)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center m-3">
                      <QuantityControlButton product={product} />
                    </div>
                  </li>
                );
              })
            ) : (
              <div className="my-5">
                <Link
                  className="hover:text-pirates-gold"
                  onClick={handleShowCart}
                  href={"/shop"}
                >
                  Cart empty, Go to shop! <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </div>
            )}
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
