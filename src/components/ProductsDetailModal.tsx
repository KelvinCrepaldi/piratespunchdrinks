import { IProductDetailModal } from "@/interfaces/ProductDetailModal.interface";
import { IProduct } from "@/interfaces/product.interface";
import { useState } from "react";
import Image from "next/image";
import QuantityControlButton from "./QuantityControlButton";
import ActionBtn from "./ActionBtn";
import Link from "next/link";

export default function ProductsDetailModal({
  product,
  children,
}: IProductDetailModal) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen bg-black opacity-60"
            onClick={handleIsOpen}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-pirates-black p-4 m-10 max-w-5xl w-full relative modal-height ">
              <div className="w-full flex justify-end">
                <button
                  className="text-2xl font-fredericka"
                  onClick={handleIsOpen}
                >
                  X
                </button>
              </div>
              <div className="flex flex-wrap overflow-y-scroll m-2   max-w-5xl w-full relative modal-height">
                <div className="flex flex-col  md:flex-row">
                  <Image
                    className="md:m-auto md:w-7"
                    src={product.img_url}
                    alt="product image"
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{ width: "90%", height: "auto", maxWidth: "500px" }} // optional
                  ></Image>
                  <div className="m-2 md:m-10">
                    <h1 className="border-b-2 border-pirates-red">
                      {product.name}
                    </h1>
                    <div className="flex justify-between text-pirates-red font-pirata text-xl">
                      <p>{product.amount} - Unity</p>
                      <p>{product.category?.name}</p>
                    </div>
                    <p className="text-3xl font-fredericka text-pirates-gold">
                      R$: {product.price}
                    </p>
                    <p>{product.apresentation}</p>
                    <span className="text-3xl font-fredericka text-pirates-silver">
                      Adicionar ao carrinho:
                    </span>
                    <div className="flex">
                      <QuantityControlButton
                        product={product}
                      ></QuantityControlButton>
                      <Link href="/cart">
                        <ActionBtn>Ir para o carrinho</ActionBtn>
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver">
                    Characteristic{"'"}s
                  </h1>
                  <ul>
                    {product.characteristic?.map((char) => (
                      <li key={char.id}>
                        <p>{char.text}</p>
                      </li>
                    ))}
                  </ul>
                  <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver">
                    Additional Information
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="cursor-pointer" onClick={handleIsOpen}>
        {children}
      </div>
    </>
  );
}
