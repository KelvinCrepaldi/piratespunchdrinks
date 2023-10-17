import Image from "next/image";
import { useState } from "react";
import formatReal from "@/utils/formatReal";
import { IProduct } from "@/interfaces/product.interface";

interface IListPurchaseProps {
  products: IProduct[];
}

export const ListPurchase = ({ products }: IListPurchaseProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`${
          !isOpen ? "max-h-0" : "max-h-96"
        } overflow-y-auto transition-all`}
      >
        {products.map((item: any) => {
          const totalValue = item.quantity * parseFloat(item.product.price);

          return (
            <div key={item.id} className="flex m-1 p-2 bg-neutral-100 rounded">
              <Image
                src={item.product.img_url}
                alt="Mini product image"
                width={90}
                height={100}
              ></Image>
              <div className="flex flex-col ml-3 w-full">
                <span className="text-pirates-gold border-b border-neutral-400 ">
                  {item.product.name}
                </span>
                <span className="text-pirates-gold">
                  Preço por unidade:{" "}
                  <span className="text-pirates-black">
                    {formatReal(parseFloat(item.product.price))}
                  </span>
                </span>
                <span className="text-pirates-gold">
                  Quantidade:{" "}
                  <span className="text-pirates-black">{item.quantity}</span>
                </span>
                <span className="text-pirates-gold">
                  Total:{" "}
                  <span className="text-pirates-black">
                    {formatReal(totalValue)}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="text-green-800" onClick={handleIsOpen}>
        {!isOpen ? "Ver todos os produtos ▾" : "Esconder produtos ▴"}
      </button>
    </div>
  );
};
