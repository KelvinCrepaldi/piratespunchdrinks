import { IProduct } from "@/interfaces/product.interface";
import { ProductsDetailModal } from "@/components/shop/ProductsDetailModal";
import { useState } from "react";
import Image from "next/image";
import formatReal from "@/utils/formatReal";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 3882a1549e9ecb030632a4a0c8b34e2abe0d3df9

interface ICardHighlightProductProps {
  product: IProduct;
}

export function CardHighlightProduct({
  product,
}: ICardHighlightProductProps): JSX.Element {
<<<<<<< HEAD
=======
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

>>>>>>> 3882a1549e9ecb030632a4a0c8b34e2abe0d3df9
  return (
    <div className="m-1 p-1 bg-pirates-shop-card rounded flex-grow shrink-[10px] border border-zinc-900 ">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded"
          src={product.img_url}
          alt="product image"
        />
      </div>

      <div className="flex flex-col items-center" key={product.id}>
        <div className="mt-2">
          <h1 className="text-pirates-white text-center font-pirata text-xl ">
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
<<<<<<< HEAD
        <Link
          className=" px-10 m-2 h-7 bg-pirates-gold hover:bg-pirates-red hover:text-white transition-all text-pirates-black rounded-xl text-center text-xl font-pirata"
          href={`shop/product/${product.code}`}
        >
          Comprar
        </Link>
=======
        <ProductsDetailModal product={product}>
          <button className=" px-10 m-2 h-7 bg-pirates-gold hover:bg-pirates-red hover:text-white transition-all text-pirates-black rounded-xl text-center text-xl font-pirata">
            Comprar
          </button>
        </ProductsDetailModal>
>>>>>>> 3882a1549e9ecb030632a4a0c8b34e2abe0d3df9
      </div>
    </div>
  );
}
