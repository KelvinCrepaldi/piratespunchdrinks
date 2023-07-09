import Image from "next/image";
import { useState } from "react";

const ListPurchase = ({ products }: any) => {
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
        {products.map((item: any) => (
          <div key={item.id} className="flex m-1 p-2 bg-neutral-800 ">
            <Image
              src={item.product.img_url}
              alt="Mini product image"
              width={90}
              height={100}
            ></Image>
            <div className="flex flex-col ml-3">
              <span>{item.product.name}</span>
              <span>R$: {item.product.value} Un.</span>
              <span>Quantity: {item.quantity}</span>
              <span>Total: {item.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="text-pirates-gold" onClick={handleIsOpen}>
        {!isOpen ? "view all products ▾" : "hidden products ▴"}
      </button>
    </div>
  );
};

export default ListPurchase;

/*  */
