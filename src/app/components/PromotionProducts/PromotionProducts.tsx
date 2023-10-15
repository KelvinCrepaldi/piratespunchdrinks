import { CardProduct } from "@/components/_ui/CardProduct";
import { IPromotion } from "@/interfaces/highlights.interface";
import { IProduct } from "@/interfaces/product.interface";
import pirateEventImage from "/public/images/pirateevent.svg";
import Image from "next/image";

export interface PromotionProductsProps {
  promotion: IPromotion;
  title?: string;
}

const PromotionProducts = ({
  promotion,
  title,
}: PromotionProductsProps): JSX.Element => {
  return (
    <section className="w-full  mx-auto   bg-zinc-200 pb-20">
      {title && (
        <div className="relative px-5 text-center flex flex-col items-center pt-20 w-full bg-zinc-300 mb-20 border-b-4 border-zinc-100">
          <h2 className="mb-5 text-red-900 border-b-4 border-red-900 font-imfell">
            {title}
          </h2>
          <div className="relative -bottom-5">
            <Image
              src={pirateEventImage}
              alt="Pirate event promo svg"
              width={100}
            ></Image>
          </div>
          <Image
            src={"/backgroundTexture/piratemaptexture.svg"}
            width={600}
            height={300}
            alt="background pirate map texture"
            className="absolute top-[100px] left-0 w-1/3"
          ></Image>
          <Image
            src={"/backgroundTexture/piratemaptexture.svg"}
            width={600}
            height={300}
            alt="background pirate map texture"
            className="absolute top-[100px] right-0 rotate-180 w-1/3"
          ></Image>
        </div>
      )}

      <div className=" max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full">
        {promotion?.products.slice(0, 8).map((product: IProduct) => (
          <CardProduct key={product.id} product={product}></CardProduct>
        ))}
      </div>
    </section>
  );
};

export default PromotionProducts;
