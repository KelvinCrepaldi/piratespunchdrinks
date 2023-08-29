import { IProductDetailModalProps } from "@/interfaces/ProductDetailModal.interface";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { QuantityControlButton } from "../../_ui/QuantityControlButton";
import { ActionBtn } from "../../_ui/ActionBtn";
import Link from "next/link";
import { IProduct } from "@/interfaces/product.interface";
import { scrollToTop } from "@/utils/scrollToTop";

interface IProductsDetailModal {
  product: IProduct;
  children: ReactNode;
}

export function ProductsDetailModal({
  product,
  children,
}: IProductsDetailModal): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, [isOpen]);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div
            className="fixed z-20 top-0 left-0 w-full h-full bg-black opacity-70"
            onClick={handleIsOpen}
          ></div>

          <div className="absolute top-0 left-0 w-full z-20">
            <div className="bg-pirates-black p-4 mx-auto my-5   max-w-5xl">
              <div className="w-full flex justify-end">
                <button
                  className="text-2xl font-fredericka"
                  onClick={handleIsOpen}
                >
                  X
                </button>
              </div>
              <div className="flex flex-wrap overflow-y-scroll m-2   max-w-5xl w-full relative ">
                <div className="flex flex-col  md:flex-row">
                  <Image
                    className="md:m-auto  w-full md:w-1/2"
                    src={product.img_url}
                    alt="product image"
                    width={0}
                    height={0}
                    sizes="100%"
                    priority
                    loading="eager"
                  ></Image>

                  <div className="m-2 md:m-10 md:w-1/2">
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

                <div className="w-full">
                  <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver w-full">
                    Characteristic{"'"}s
                  </h1>
                  <ul className="list-disc list-inside">
                    {product.characteristic?.map((char) => (
                      <li key={char.id} className="my-1">
                        <span>{char.text}</span>
                      </li>
                    ))}
                  </ul>
                  <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver">
                    Additional Information
                  </h1>
                  <ul className="list-disc list-inside">
                    {product.aditional_info?.map((char: any) => (
                      <li key={char.id} className="my-1">
                        <span>{char.text}</span>
                      </li>
                    ))}
                  </ul>
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
