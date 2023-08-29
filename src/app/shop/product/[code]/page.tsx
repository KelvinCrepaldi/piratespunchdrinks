"use client";

import { Button } from "@/components/_ui/Button/Button";
import { QuantityControlButton } from "@/components/_ui/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import api from "@/services";
import Image from "next/image";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await api.get(`/product/list`);
  return response.data.map((product: IProduct) => {
    return {
      code: product.code,
    };
  });
}

async function getProduct(code: string) {
  const data = await api.get(`/product/detail/${code}`);
  return data.data;
}

export default async function Page({ params }: { params: { code: string } }) {
  const product: IProduct = await getProduct(params.code);

  return (
    <div className="m-auto max-w-[1080px] p-5">
      <div className="border-b-2 border-pirates-red w-full mb-3">
        <h1 className="font-fredericka">{product.name}</h1>
        <span className="">
          Código de referência:{" "}
          <span className="font-bold">{product.code}</span>
        </span>
      </div>
      <div className="flex flex-col  lg:flex-row mb-10">
        <div className="relative border-4 border-pirates-black-transparent rounded lg:w-1/2 aspect-square mt-5 max-h-[500px] max-w-[500px]">
          <Image
            fill
            className="rounded "
            src={product.img_url}
            alt="product image"
          />
        </div>

        <div className="mx-2 md:m-4 lg:w-1/2">
          <p className="font-pirata text-pirates-red">
            {product.amount} - Unidade
          </p>
          <p className="font-pirata text-pirates-red">
            {product.category?.name}
          </p>
          <p className="text-3xl font-fredericka text-pirates-gold">
            R$: {product.price}
          </p>
          <p className="my-5">{product.apresentation}</p>
          <span className="text-3xl font-fredericka text-pirates-silver h-full ">
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

      <div className="w-full">
        <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver w-full">
          Caracteristicas
        </h1>
        <ul className="list-disc list-inside">
          {product.characteristic?.map((char) => (
            <li key={char.id} className="my-1">
              <span>{char.text}</span>
            </li>
          ))}
        </ul>
        <h1 className="border-b-2 border-pirates-red font-imfell text-pirates-silver">
          Informações adicionais
        </h1>
        <ul className="list-disc list-inside">
          {product.aditional_info?.map((char: any) => (
            <li key={char.id} className="my-1">
              <span>{char.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
