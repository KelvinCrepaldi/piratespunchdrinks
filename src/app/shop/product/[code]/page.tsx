"use client";
import { ActionBtn } from "@/components/_ui/ActionBtn";
import { Button } from "@/components/_ui/Button/Button";
import { QuantityControlButton } from "@/components/_ui/QuantityControlButton";
import { IProduct } from "@/interfaces/product.interface";
import api from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default async function Page() {
  const params = useParams();
  const data = await api.get(`/product/detail/${params.code}`);
  const product: IProduct = data.data;

  return (
    <div className="m-auto max-w-[1080px] p-5">
      <div className="flex flex-col  md:flex-row justify-center mb-10">
        <div className="relative border-4 border-pirates-black-transparent rounded h-full md:w-1/2 aspect-square mt- 5">
          <Image
            fill
            className="rounded "
            src={product.img_url}
            alt="product image"
          />
        </div>

        <div className="m-2 md:m-4 md:w-1/2">
          <h1 className="border-b-2 border-pirates-red">{product.name}</h1>
          <div className="flex justify-between text-pirates-red font-pirata text-xl">
            <p>{product.amount} - Unidade</p>
            <p>{product.category?.name}</p>
          </div>
          <p className="text-3xl font-fredericka text-pirates-gold">
            R$: {product.price}
          </p>
          <p>{product.apresentation}</p>
          <span className="text-3xl font-fredericka text-pirates-silver h-full">
            Adicionar ao carrinho:
          </span>
          <div className="flex flex-col justify-center">
            <QuantityControlButton product={product}></QuantityControlButton>
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
