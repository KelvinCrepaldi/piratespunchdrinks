import { IProduct } from "@/interfaces/product.interface";
import CardHighlightProduct from "./CardHighlightProduct";
export default function HighlightsProducts({
  products,
  title,
}: {
  products: IProduct[];
  title: string;
}) {
  console.log(products[0]);
  const product = products;
  console.log(product);
  return (
    <div className="flex flex-col">
      <h2 className="text-center">{title}</h2>
      <div className="border-t flex justify-center flex-wrap space-x-7 py-10">
        <div className="w-44 h-60 bg-black">Item</div>
        <div className="w-44 h-60 bg-black">Item</div>
      </div>
    </div>
  );
}
