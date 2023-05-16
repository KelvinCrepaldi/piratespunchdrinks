import Image from "next/image";
import piratespunch from "/public/images/piratepunch.png";
import DisplayProducts from "@/components/Display";
export default function Home() {
  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className=" text-center">
          <h1 className="inline-block border-b text-5xl">Pirate{"'"}s Punch</h1>
          <h2 className="mb-4 text-3xl">Drinks</h2>
          <p className="text-xl md:px-12">
            Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares! No
            Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}atordoado de
            sabor{"'"}, navegando por uma tempestade de sabores piratas
            irresistíveis.
          </p>
          <a>SHOP HERE</a>
        </div>
        <Image src={piratespunch} width={300} alt="pirates punch logo" />
      </section>
      <DisplayProducts title="Em promoção..." />
      <section>
        <p>
          {" "}
          AHOY, MARUJO! Descobrimos o tesouro da diversão na Pirate{"'"}s Punch!
          De 20h às 22h, aproveite 20% de desconto em todas as cervejas! Venha
          curtir a festa com os melhores sabores piratas! ️
        </p>
      </section>
      <DisplayProducts title="Mais pedidas..." />
      <DisplayProducts title="Melhores avaliados..." />
    </main>
  );
}
