import { Button } from "@/components/_ui/Button/Button";
import { QuantityControlButton } from "@/components/_ui/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import api from "@/services";
import Image from "next/image";
import Link from "next/link";

async function getProduct(code: string) {
  const data = await api.get(`/product/detail/${code}`);
  return data.data;
}

export default async function Page({
  params,
}: {
  params: { code: string };
}): Promise<JSX.Element> {
  const product: IProduct = await getProduct(params.code);

  return (
    <section className="m-auto max-w-[1080px] p-5 ">
      <div className="border-b-2 border-pirates-red w-full mb-3">
        <h1 className="font-imfell text-pirates-red-strong">{product.name}</h1>
        <p className="text-black">
          Código de referência:{" "}
          <span className="font-bold text-black">{product.code}</span>
        </p>
      </div>
      <div className="flex flex-col  lg:flex-row mb-10">
        <div className="relative border-4 border-pirates-black-transparent rounded lg:w-1/2 aspect-square mt-5 max-h-[500px] max-w-[500px]">
          <Image fill src={product.img_url} alt="product image" />
        </div>

        <div className="mx-2 md:m-4 lg:w-1/2">
          <p className="text-2xl font-pirata text-pirates-red-strong">
            {product.amount} - Unidade
          </p>
          <p className="text-2xl font-pirata text-pirates-red-strong">
            {product.category?.name}
          </p>
          <p className="text-3xl font-inter text-pirates-red-strong font-bold">
            R$: {product.price}
          </p>
          <p className="my-5 text-black font-bold">{product.apresentation}</p>
          <span className="text-3xl font-imfell text-pirates-silver h-full text-black">
            Adicionar ao carrinho:
          </span>
          <QuantityControlButton product={product}></QuantityControlButton>
          <div className="flex flex-col justify-center mt-5">
            <Link href="/shop">
              <Button>Continuar comprando</Button>
            </Link>
            <Link href="/cart">
              <Button>Ir para o carrinho</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full my-20">
        <h1 className="border-b-2 border-pirates-red-strong text-pirates-red-strong font-imfell text-pirates-silver w-full">
          Caracteristicas
        </h1>
        <ul className="list-disc list-inside">
          {product.characteristic?.map((char) => (
            <li key={char.id} className="my-1">
              <span className="text-black font-bold">{char.text}</span>
            </li>
          ))}
        </ul>
        <h1 className="border-b-2 border-pirates-red-strong text-pirates-red-strong font-imfell text-pirates-silver">
          Informações adicionais
        </h1>
        <ul className="list-disc list-inside">
          {product.aditional_info?.map((char: any) => (
            <li key={char.id} className="my-1">
              <span className="text-black font-bold">{char.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
