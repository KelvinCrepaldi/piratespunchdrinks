import AboutTexts from "./components/sections/AboutTexts/AboutTexts";
import Journey from "./components/sections/Journey/journey";

export default function About() {
  return (
    <main className="w-100 font-imfell">
      <section className="flex flex-col md:flex-row justify-center items-center p-5 max-w-[1200px] mx-auto mb-20">
        <div className=" flex lg:flex-col justify-center items-center  m-auto">
          <div className="text-center">
            <h1 className="text-pirates-red-strong border-b-4 border-pirates-red-strong font-imfell">
              Sobre
            </h1>
            <h2 className="mb-4 text-3xl font-pirata text-pirates-red-strong">
              Pirate{"'"}s Punch
            </h2>
          </div>

          <p className="text-center text-black max-w-[800px] text-2xl">
            Bem-vindo a bordo, marujos, à Pirate{"'"}s Punch, a loja de bebidas
            mais pirata-tástica de Tortuga! Preparem-se para uma aventura de
            sabor e diversão enquanto navegamos pelos mares agitados da bebida
            de qualidade.
          </p>
        </div>
      </section>
      <AboutTexts />
      <Journey />
    </main>
  );
}
