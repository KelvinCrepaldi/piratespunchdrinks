import { IProduct } from "@/interfaces/product.interface";

import Image from "next/image";
import formatReal from "@/utils/formatReal";
import Link from "next/link";

interface ICardHighlightProductProps {
  product: IProduct;
}

export function CardProduct({
  product,
}: ICardHighlightProductProps): JSX.Element {
  return (
    <div className="relative m-1 p-1 pb-5  rounded shadow bg-zinc-200 border border-zinc-300">
      <Link href={`shop/product/${product.code}`}>
        <div className="relative w-full aspect-square">
          <Image
            fill
            className="rounded shadow-lg"
            src={product.img_url}
            alt="product image"
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px"
            priority
          />
        </div>
      </Link>

      <div className="flex flex-col items-center" key={product.id}>
        <div className="mt-2">
          <p className="text-center text-zinc-500">
            {product.category?.name} - {product.amount}
          </p>
          <Link href={`shop/product/${product.code}`}>
            <h6 className=" text-center">{product.name}</h6>
          </Link>

          <p className="text-orange-700 text-center text-xl font-pirata">
            {formatReal(parseFloat(product.price))}
          </p>
        </div>
      </div>
    </div>
  );
}
