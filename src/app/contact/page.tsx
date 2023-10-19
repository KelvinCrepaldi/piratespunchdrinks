import SendMessage from "./components/sections/SendMessage/SendMessage";
import LocalInfo from "./components/sections/LocalInfo/LocalInfo";
import Localization from "./components/sections/Localization/Localization";
import FarewellMessage from "./components/sections/FarewellMessage/FarewellMessage";

export default function Contact(): JSX.Element {
  return (
    <main className="relative m-auto  space-y-10 font-imfell">
      <div className="flex flex-col md:flex-row justify-center items-center p-5 max-w-[1200px] mx-auto">
        <div className=" flex flex-col justify-center items-center  m-auto">
          <div className="text-center">
            <h1 className="text-pirates-red-strong border-b-4 border-pirates-red-strong font-imfell">
              Contato
            </h1>
            <h2 className="mb-4 text-3xl font-pirata text-pirates-red-strong">
              Pirate{"'"}s Punch
            </h2>
          </div>

          <p className="text-center text-black max-w-[800px] text-2xl">
            Yo ho ho, marujos! Se você deseja entrar em contato conosco, aqui
            estão as informações que você procura. Sinta-se à vontade para
            ancorar em nosso lendário refúgio pirata, Tortuga, e nos fazer uma
            visita. Aqui estão os detalhes:
          </p>
        </div>
      </div>

      <LocalInfo />
      <Localization />
      <SendMessage />
      <FarewellMessage />
    </main>
  );
}
