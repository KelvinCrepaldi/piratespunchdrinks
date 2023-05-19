import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces/product.interface";
export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const products = useSelector((state: any) => state.products.products);
  const product: IProduct = products.find(
    (product: IProduct) => product.id === id
  );
  console.log(product);

  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16 space-y-16">
      <h1>Post id {product.name}</h1>
      <h2>{product.category?.name}</h2>
      {product.apresentation}
    </main>
  );
}
