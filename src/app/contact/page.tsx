"use client";
import Image from "next/image";

import SendMessage from "./components/sections/SendMessage/SendMessage";
import LocalInfo from "./components/sections/LocalInfo/LocalInfo";
import Localization from "./components/sections/Localization/Localization";

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
      <section className=" relative w-full my-20 pb-20 px-5">
        <Image
          src={"/backgroundTexture/piratemaptexture.svg"}
          width={600}
          height={300}
          alt="background pirate map texture"
          className="absolute -top-10 left-0 w-1/3 opacity-40 hidden lg:block"
        ></Image>
        <h3 className="text-center text-pirates-red-strong max-w-[1200px] mx-auto ">
          Então, marujos, enviem-nos uma mensagem ou planejem sua viagem ao
          Pirate
          {"'"}s Punch em Tortuga. Estaremos esperando com um caneco de grogue e
          uma calorosa recepção pirata!
        </h3>
        <Image
          src={"/backgroundTexture/piratemaptexture.svg"}
          width={600}
          height={300}
          alt="background pirate map texture"
          className="absolute -top-10 right-0 rotate-180 w-1/3  opacity-40 hidden lg:block"
        ></Image>
      </section>
    </main>
  );
}
