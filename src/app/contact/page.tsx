"use client";
import Image from "next/image";

import tortuga from "/public/images/tortuga.jpg";
import SendMessage from "./components/sections/SendMessage/SendMessage";
import LocalInfo from "./components/sections/LocalInfo/LocalInfo";

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

      <SendMessage />
      <LocalInfo />

      <section className="w-full flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto my-20">
        <div className="relative aspect-video  w-full lg:w-1/2 ">
          <Image
            className=" rounded xl border-4 border-pirates-black-transparent"
            src={tortuga}
            alt="pirate punch logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="lg:w-1/2 p-10">
          <p className="text-black">
            A Ilha Tortuga é um paraíso pirata lendário, mas não se preocupe,
            nós o ajudaremos a encontrar o caminho! Ao chegar na ilha, pergunte
            a qualquer marujo local ou siga o aroma de rum que paira no ar.
            Estamos localizados na avenida principal dos piratas,
            convenientemente situados entre a Taverna da Jolly Roger e a
            Emporium dos Tesouros do Barba Negra. Procure pela nossa
            inconfundível placa do Pirate{"'"}s Punch, adornada com caveiras e
            ossos cruzados.
          </p>
          <p className="text-black">
            Para qualquer pergunta, sugestão ou histórias de aventuras piratas,
            sinta-se à vontade para nos contatar por telefone ou e-mail. Nossa
            tripulação de piratas experientes está sempre pronta para ajudá-lo a
            encontrar a bebida perfeita para o seu paladar. Se preferir nos
            enviar uma mensagem em uma garrafa, certifique-se de que ela esteja
            bem vedada e à prova d{"'"}água - não queremos que suas palavras se
            percam no mar!
          </p>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto my-20 pb-20">
        <h3 className="text-center text-pirates-red-strong">
          Então, marujos, enviem-nos uma mensagem ou planejem sua viagem ao
          Pirate
          {"'"}s Punch em Tortuga. Estaremos esperando com um caneco de grogue e
          uma calorosa recepção pirata!
        </h3>
      </section>
    </main>
  );
}
