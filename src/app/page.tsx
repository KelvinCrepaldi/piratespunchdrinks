"use client";
import Image from "next/image";
import Link from "next/link";
import piratespunch from "/public/images/piratepunch.png";
import { CardProduct } from "@/components/_ui/CardProduct";
import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces/product.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { fetchPromotions } from "@/store/reducers/highlightsReducer";
import { IPromotion } from "@/interfaces/highlights.interface";
import { ContainerEventPromo } from "@/components/_ui/ContainerEventPromo";
import { Countdown } from "@/components/_ui/Countdown";

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const promotions: IPromotion[] = useSelector(
    (state: RootState) => state.highlights.promotionProducts
  );

  useEffect(() => {
    dispatch(fetchPromotions());
  }, [dispatch]);

  return (
    <main className=" m-auto">
      <div className="mb-5  flex flex-col-reverse md:flex-row md:items-start items-center justify-center py-10  ">
        <div className="max-w-3xl flex items-center">
          <div className="text-center">
            <h1 className="inline-block border-b-2 px-5 border-pirates-red text-5xl md:text-6xl font-fredericka ">
              Pirate{"'"}s Punch
            </h1>
            <h2 className="mb-4 text-2xl md:text-3xl font-pirata">
              Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares!
            </h2>
            <p className="text-lg md:text-xl md:px-3 font-fredericka">
              No Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}
              atordoado de sabor{"'"}, navegando por uma tempestade de sabores
              piratas irresistíveis.
            </p>
            <div className=" m-5 ">
              <Link
                className="bg-pirates-gold text-pirates-card-dark font-pirata text-3xl px-2 py-1 rounded cursor-pointer hover:bg-yellow-600"
                href={"/shop"}
              >
                Compre agora!
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={piratespunch}
          width={260}
          alt="pirates punch logo"
          className="inline-block"
          priority
        />
      </div>
      <div className="max-w-5xl flex flex-col items-center m-auto">
        <div className="w-full">
          <div className="flex justify-between border-b-2 border-pirates-red mb-1 ">
            <h1 className="text-pirates-gold font-fredericka">Promoção!</h1>
            <h1 className="text-pirates-gold font-fredericka">
              Termina em{" "}
              <Countdown endDate={promotions[0]?.finalDate.toString()} />
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full">
            {promotions[0]?.products.slice(0, 8).map((product: IProduct) => (
              <CardProduct key={product.id} product={product}></CardProduct>
            ))}
          </div>
        </div>

        <ContainerEventPromo>
          <h1 className="font-fredericka">AHOY, MARUJO!</h1>
          <h2 className="font-pirata">
            Beba como um Corsário no Pirate{"'"}s Punch!
          </h2>
          <p className="font-imfell">
            Descobrimos o tesouro da diversão na Pirate{"'"}s Punch! De 20h às
            22h, aproveite 20% de desconto em todas as cervejas! Venha curtir a
            festa com os melhores sabores piratas!
          </p>
        </ContainerEventPromo>

        <div className="w-full">
          <div className="flex justify-between border-b-2 border-pirates-red mb-1">
            <h1 className="text-pirates-gold font-fredericka">
              Novos Produtos!
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full">
            {promotions[0]?.products.slice(0, 8).map((product: IProduct) => (
              <CardProduct key={product.id} product={product}></CardProduct>
            ))}
          </div>
        </div>
        <ContainerEventPromo>
          <h1 className="font-fredericka">Evento Pirate{"'"}s Punch!</h1>
          <h2 className="font-pirata">
            Beba como um Corsário no Pirate{"'"}s Punch!
          </h2>
          <p className="font-imfell">
            Desconto exclusivo para piratas! Aventure-se no Bar do Capitão e
            ganhe desconto nas bebidas ao comparecer vestido de pirata. Não
            perca essa chance! Aproveite agora!
          </p>
        </ContainerEventPromo>
      </div>
    </main>
  );
}
