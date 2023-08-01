import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import piratespunch from "/public/images/piratepunch.png";
import CardHighlightProduct from "@/components/CardHighlightProduct";
import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces/product.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { fetchPromotions } from "@/store/reducers/highlightsReducer";
import { IPromotion } from "@/interfaces/highlights.interface";
import ContainerEventPromo from "@/components/ContainerEventPromo";
import Countdown from "@/components/Countdown";

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const promotions: IPromotion[] = useSelector(
    (state: RootState) => state.highlights.promotionProducts
  );

  useEffect(() => {
    dispatch(fetchPromotions());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Home - Pirates Punch Drinks</title>
        <meta name="description" content="Pirates Punch Drinks" />
      </Head>
      <main className=" m-auto">
        <div className="mb-5  flex flex-col-reverse md:flex-row md:items-start items-center justify-center py-10  backdrop-blur-[5px] border-b border-pirates-black-transparent ">
          <div className="max-w-3xl flex items-center">
            <div className="text-center">
              <h1 className="inline-block border-b-2 px-5 border-pirates-red text-6xl font-fredericka ">
                Pirate{"'"}s Punch
              </h1>
              <h2 className="mb-4 text-3xl font-pirata">
                Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares!
              </h2>
              <p className="text-xl md:px-3 font-fredericka">
                No Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}
                atordoado de sabor{"'"}, navegando por uma tempestade de sabores
                piratas irresistíveis.
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
          </div>

          <Image
            src={piratespunch}
            width={300}
            alt="pirates punch logo"
            className="inline-block"
            loading={"lazy"}
          />
        </div>
        <div className="max-w-6xl flex flex-col items-center m-auto">
          <div>
            <div className="flex justify-between border-b-2 border-pirates-red mb-1 ">
              <h1 className="text-pirates-gold font-fredericka">Promoção!!!</h1>
              <Countdown endDate={promotions[0]?.finalDate.toString()} />
            </div>

            <div className="flex flex-wrap justify-between">
              {promotions[0]?.products.slice(0, 8).map((product: IProduct) => (
                <CardHighlightProduct
                  key={product.id}
                  product={product}
                ></CardHighlightProduct>
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
              22h, aproveite 20% de desconto em todas as cervejas! Venha curtir
              a festa com os melhores sabores piratas!
            </p>
          </ContainerEventPromo>

          <div>
            <div className="flex justify-between border-b-2 border-pirates-red mb-1">
              <h1 className="text-pirates-gold font-fredericka">
                Novos Produtos!
              </h1>
            </div>

            <div className="flex flex-wrap justify-between">
              {promotions[0]?.products.slice(0, 8).map((product: IProduct) => (
                <CardHighlightProduct
                  key={product.id}
                  product={product}
                ></CardHighlightProduct>
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
    </>
  );
}
