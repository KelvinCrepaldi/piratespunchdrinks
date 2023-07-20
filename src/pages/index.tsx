import Image from "next/image";
import Link from "next/link";
import piratespunch from "/public/images/piratepunch.png";
import HighlightsProducts from "@/components/HighlightsProducts";
import CardHighlightProduct from "@/components/CardHighlightProduct";
import { useSelector } from "react-redux";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/actions/products";
import { RootState } from "@/store/store";
import { fetchHighlights } from "@/store/actions/highlights";
import { IPromotion } from "@/interfaces/highlights.interface";

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const promotions: IPromotion[] = useSelector(
    (state: RootState) => state.highlights.promotion
  );
  console.log(promotions);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
      <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center my-10">
        <div className=" text-center">
          <h1 className="inline-block border-b-2 px-5 border-pirates-red text-6xl font-fredericka">
            Pirate{"'"}s Punch
          </h1>
          <h2 className="mb-4 text-3xl">
            Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares!
          </h2>
          <p className="text-xl md:px-3 font-fredericka">
            No Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}atordoado
            de sabor{"'"}, navegando por uma tempestade de sabores piratas
            irresistíveis.
          </p>
          <div className=" m-5 ">
            <Link
              className="bg-pirates-gold text-pirates-black font-pirata text-3xl p-2 rounded cursor-pointer hover:bg-yellow-600"
              href={"/shop"}
            >
              Compre agora!
            </Link>
          </div>
        </div>

        <Image
          src={piratespunch}
          width={300}
          alt="pirates punch logo"
          className="inline-block"
        />
      </div>
      <h1 className="border-b-2 border-pirates-red mb-4 font-imfell text-center text-pirates-red">
        Novos produtos...<div>{promotions[0].finalDate.toString()}</div>
      </h1>
      <div className="flex flex-wrap justify-between">
        {promotions[0].products.slice(0, 8).map((product: IProduct) => (
          <CardHighlightProduct
            key={product.id}
            product={product}
          ></CardHighlightProduct>
        ))}
      </div>

      <div className="m-6 text-center p-10 rounded-lg bg-pirates-black-transparent">
        <h1>AHOY, MARUJO!</h1>
        <h2>Beba como um Corsário no Pirate{"'"}s Punch!</h2>
        <p>
          Descobrimos o tesouro da diversão na Pirate{"'"}s Punch! De 20h às
          22h, aproveite 20% de desconto em todas as cervejas! Venha curtir a
          festa com os melhores sabores piratas!
        </p>
      </div>
      <div className="m-6 text-center p-10 rounded-lg bg-pirates-black-transparent">
        <h1>Evento Pirate{"'"}s Punch!</h1>
        <h2>Beba como um Corsário no Pirate{"'"}s Punch!</h2>
        <p>
          Desconto exclusivo para piratas! Aventure-se no Bar do Capitão e ganhe
          desconto nas bebidas ao comparecer vestido de pirata. Não perca essa
          chance! Aproveite agora!
        </p>
      </div>
    </main>
  );
}
