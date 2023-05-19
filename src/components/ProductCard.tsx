import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { IProductCard } from "@/interfaces/product.interface";

export default function ProductCard({ product, type }: IProductCard) {
  const containerType = () => {
    if (type === "small") {
      return "flex flex-row justify-start hover:bg-pirates-black-hover transition p-2 rounded-lg m-3";
    }
    if (type === "big") {
      return "flex flex-col start hover:bg-pirates-black-hover transition p-1 rounded-lg m-3";
    }
  };

  return (
    <Link href={`/shop/${product.id}`}>
      {" "}
      <div className={containerType()}>
        <Image
          src={
            "https://s2.glbimg.com/ZimrgKXbmSFbw8L1pYAfTbag3Cw=/0x0:620x803/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/P/l/owl46DSkGzNbN798Lglw/2016-10-21-receita-drink-laranja-blue.jpeg"
          }
          alt="drink"
          width={type === "small" ? 100 : 200}
          height={200}
          className="rounded"
        ></Image>
        <div className="flex flex-col  text-center w-full">
          <div className="flex flex-col">
            <h1 className="text-lg">{product.name.toUpperCase()}</h1>
            <div className="flex">
              <div className="w-full border-b-2 border-pirates-red m-3" />
              <span className="text-pirates-red font-imfell text-xl">
                {product.category?.name}
              </span>
              <div className="w-full border-b-2 border-pirates-red m-3" />
            </div>
            <span className="text-pirates-silver font-fredericka text-xl">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
