import Image from "next/image";
import { useState } from "react";
import { IProductCard } from "@/interfaces/product.interface";
import ProductsDetailModal from "./ProductsDetailModal";

export default function ProductCard({
  product,
  type,
  ...props
}: IProductCard): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="m-2 border-l border-r border-pirates-black-hover rounded-xl">
      <ProductsDetailModal product={product}>
        <div
          className="flex flex-col start hover:bg-pirates-black-hover transition p-1 rounded-lg w-60 text-xl"
          onClick={handleOpenModal}
        >
          <Image
            src={product.img_url}
            alt="drink"
            width={200}
            height={200}
            className="rounded m-auto"
          ></Image>

          <div className="flex flex-col  text-center  w-full">
            <div className="flex flex-col">
              <h1 className="text-base w-full">{product.name.toUpperCase()}</h1>
              <div className="flex">
                <div className="w-full border-b-2 border-pirates-red m-3" />
                <span className="text-pirates-red font-imfell">
                  {product.amount}
                </span>
                <div className="w-full border-b-2 border-pirates-red m-3" />
              </div>
              <span className="text-pirates-silver font-fredericka ">
                R$: {product.price}
              </span>
            </div>
          </div>
        </div>
      </ProductsDetailModal>
    </div>
  );
}
