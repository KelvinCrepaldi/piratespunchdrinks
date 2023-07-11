import Image from "next/image";
import Link from "next/link";
import piratespunch from "/public/images/piratepunch.png";
import HighlightsProducts from "@/components/HighlightsProducts";
import ActionBtn from "@/components/ActionBtn";

export default function Home() {
  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
      <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center ">
        <div className=" text-center">
          <h1 className="inline-block border-b-2 px-5 border-pirates-red text-6xl font-fredericka">
            Pirate{"'"}s Punch
          </h1>
          <h2 className="mb-4 text-3xl">
            Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares!
          </h2>
          <p className="text-xl md:px-3 inline-block font-fredericka">
            No Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}atordoado
            de sabor{"'"}, navegando por uma tempestade de sabores piratas
            irresistíveis.
          </p>
          <Link href={"/shop"}>
            <ActionBtn>Compre aqui!</ActionBtn>
          </Link>
        </div>

        <Image
          src={piratespunch}
          width={300}
          alt="pirates punch logo"
          className="inline-block"
        />
      </div>

      <HighlightsProducts title="Em promoção..." />

      <div>
        <p>
          AHOY, MARUJO! Descobrimos o tesouro da diversão na Pirate{"'"}s Punch!
          De 20h às 22h, aproveite 20% de desconto em todas as cervejas! Venha
          curtir a festa com os melhores sabores piratas!
        </p>
      </div>

      <HighlightsProducts title="Mais pedidas..." />
      <HighlightsProducts />
      <div className="m-6 text-center border p-10 rounded-lg">
        <h1>Evento Pirata</h1>
        <h2>Beba como um Corsário no Pirate{"'"}s Punch!</h2>
        <p>
          Desconto exclusivo para piratas! Aventure-se no Bar do Capitão e ganhe
          desconto nas bebidas ao comparecer vestido de pirata. Não perca essa
          chance! Aproveite agora!
        </p>
      </div>
      <HighlightsProducts title="Melhores avaliados..." />
      <HighlightsProducts />
    </main>
  );
}
