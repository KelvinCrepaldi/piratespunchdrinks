import { IProduct } from "@/interfaces/product.interface";
import { ProductsDetailModal } from "@/components/shop/ProductsDetailModal";
import { useState } from "react";
import Image from "next/image";
import formatReal from "@/utils/formatReal";

interface ICardHighlightProductProps {
  product: IProduct;
}

export function CardHighlightProduct({
  product,
}: ICardHighlightProductProps): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="m-1 p-1 bg-pirates-shop-card rounded flex-shrink flex-grow">
      <div className="relative w-full aspect-square">
        <Image fill className="" src={product.img_url} alt="product image" />
      </div>

      <div className="flex flex-col items-center " key={product.id}>
        <div className="mt-2">
          <h1 className="text-pirates-white text-center font-pirata text-xl w-[190px] ">
            {product.name}
          </h1>
          <div className="flex justify-center w-full">
            <div className="border-b-2 border-pirates-red flex-grow  flex-shrink mb-3 mx-2"></div>
            <p className="text-pirates-red font-pirata text-xl  ">
              {product.amount}
            </p>
            <div className="border-b-2 border-pirates-red flex-grow  flex-shrink mb-3 mx-2"></div>
          </div>

          <p className="text-orange-700 text-center text-xl font-pirata w-[190px] ">
            {formatReal(parseFloat(product.price))}
          </p>
        </div>
        <ProductsDetailModal product={product}>
          <button className=" px-10 m-2 h-7 bg-pirates-gold hover:bg-pirates-red hover:text-white transition-all text-pirates-black rounded-xl text-center text-xl font-pirata">
            Comprar
          </button>
        </ProductsDetailModal>
      </div>
    </div>
  );
}
