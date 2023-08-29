import { QuantityControlButton } from "@/components/_ui/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import formatReal from "@/utils/formatReal";
import Image from "next/image";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps): JSX.Element => {
  const totalValue = product.qtd * parseFloat(product.price);

  return (
    <div
      className="flex p-4 mb-1 mr-2 bg-pirates-card-dark justify-between rounded"
      key={product.id}
    >
      <div className="flex">
        <div>
          <Image
            src={product.img_url}
            width={100}
            height={100}
            alt="product representation image"
          />
        </div>
        <div>
          <div className="ml-5">
            <ul className="flex flex-col">
              <li className="text-xl text-pirates-gold font-bold">
                {product.name}
              </li>
              <li className="text-pirates-red font-bold">{product.amount}</li>
              <li>{product.category?.name}</li>
              <li>{formatReal(parseInt(product.price))}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center ">Quantidade</h3>
        <QuantityControlButton product={product}></QuantityControlButton>
        <div className="text-center w-full font-bold mt-3">
          Total: {formatReal(totalValue)}
        </div>
      </div>
    </div>
  );
};
