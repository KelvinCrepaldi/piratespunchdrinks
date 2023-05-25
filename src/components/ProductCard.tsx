import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { IProductCard } from "@/interfaces/product.interface";
import QuantityControlButton from "./QuantityControlButton";

export default function ProductCard({ product, type }: IProductCard) {
  const containerType = () => {
    if (type === "small") {
      return "flex flex-row justify-start hover:bg-pirates-black-hover transition p-2 rounded-lg m-3 w-32 text-ms";
    }
    if (type === "big") {
      return "flex flex-col start hover:bg-pirates-black-hover transition p-1 rounded-lg m-3 w-60 text-xl";
    }
  };

  return (
    <div>
      <Link href={`/shop/${product.id}`}>
        {" "}
        <div className={containerType()}>
          <Image
            src={product.img_url}
            alt="drink"
            width={type === "small" ? 100 : 200}
            height={0}
            className="rounded"
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
      </Link>
      <QuantityControlButton product={product}></QuantityControlButton>
    </div>
  );
}
