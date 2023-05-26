import { IProductDetailModal } from "@/interfaces/ProductDetailModal.interface";
import { useState } from "react";
import Image from "next/image";
import QuantityControlButton from "./QuantityControlButton";

export default function ProductsDetailModal({ product, children }: any) {
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

          <div className="fixed top-0 left-0 w-max m-10 bg-white ">
            <Image
              src={product.img_url}
              alt="product image"
              width={100}
              height={100}
            ></Image>
            <h1>{product.name}</h1>
          </div>
        </>
      ) : null}
      <div onClick={handleIsOpen}>{children}</div>
    </>
  );
}
