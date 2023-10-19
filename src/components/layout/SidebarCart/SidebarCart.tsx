import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import { QuantityControlButton } from "../../_ui/QuantityControlButton";
import { ActionBtn } from "../../_ui/ActionBtn";
import { ISidebarCart } from "@/interfaces/sidebarCart.interface";
import formatReal from "@/utils/formatReal";
import { RootState } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export const SidebarCart = ({
  handleShowCart,
  showCart,
}: ISidebarCart): JSX.Element => {
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
    <div
      className={`${
        !showCart && "hidden"
      } w-full h-screen fixed top-0 right-0 bg-[rgb(0,0,0,0.8)] z-20`}
    >
      <div
        className={` fixed w-80 bg-zinc-900 top-0 right-0 z-20 h-screen pr-2 pl-2 backdrop-blur`}
      >
        <div className="flex justify-end">
          <button
            onClick={handleShowCart}
            className="m-1 px-4 pt-2 text-2xl text-white"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col text-center max-h-full sticky">
          <h4>Carrinho</h4>
          {!showUserContent ? (
            <div className="text-red-300">
              Usuário não conectado, por favor{" "}
              <Link
                href={"/login"}
                onClick={handleShowCart}
                className="text-blue-500"
              >
                faça login?
              </Link>
            </div>
          ) : (
            <p>
              Usuário <span className="text-green-200">{user?.name}</span>
            </p>
          )}

          <ul className=" max-h-full overflow-y-scroll">
            {cart.length ? (
              cart.map((product: IProduct) => {
                const totalValue = product.qtd * parseFloat(product.price);
                return (
                  <li
                    key={product.id}
                    className="p-2 m-2 border-black border-t"
                  >
                    <div className="flex">
                      <div className="relative aspect-square w-1/2">
                        <Image src={product.img_url} alt={product.name} fill />
                      </div>

                      <div className="px-2 text-left w-1/2">
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
                  Carrinho vazio, vá para a loja!{" "}
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </div>
            )}
          </ul>

          <div className="m-4 mb-20">
            <Link href="/cart" onClick={handleShowCart} className="m-4">
              <ActionBtn>Finalizar Compra</ActionBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
