import Image from "next/image";

import piratepunchlogo from "/public/images/piratepunch.png";

export default function Contact() {
  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16 space-y-10">
      <div className="flex">
        <div className="w-full">
          <h1>About</h1>
          <h2>Pirate{"'"}s Punch</h2>
        </div>
        <Image src={piratepunchlogo} alt="pirate punch logo" width={200} />
      </div>
      <p className="text-center text-xl">
        Yo ho ho, marujos! Se você deseja entrar em contato conosco, aqui estão
        as informações que você procura. Sinta-se à vontade para ancorar em
        nosso lendário refúgio pirata, Tortuga, e nos fazer uma visita. Aqui
        estão os detalhes:
      </p>
      <ul className="space-y-3">
        <li>
          <h3>Endereço da Loja: </h3>
          <p>
            Pirate{"'"}s Punch - Sede dos Piratas Sedentos! Ilha Tortuga, Mar do
            Caribe
          </p>
        </li>
        <li>
          <h3>Horário de Funcionamento:</h3>
          <p>
            Segunda a sexta-feira: das 10h00 às 23h00 Sábado e domingo: das
            12h00 à 01h00
          </p>
        </li>
        <li>
          <h3>Informações de Contato: </h3>
          <p>Telefone: +1-555-PUNCHY E-mail: info@piratespunch.com</p>
        </li>
        <li>
          <h3>Como nos Encontrar:</h3>
          <p>
            A Ilha Tortuga é um paraíso pirata lendário, mas não se preocupe,
            nós o ajudaremos a encontrar o caminho! Ao chegar na ilha, pergunte
            a qualquer marujo local ou siga o aroma de rum que paira no ar.
            Estamos localizados na avenida principal dos piratas,
            convenientemente situados entre a Taverna da Jolly Roger e a
            Emporium dos Tesouros do Barba Negra. Procure pela nossa
            inconfundível placa do Pirate{"'"}s Punch, adornada com caveiras e
            ossos cruzados.
          </p>
        </li>
      </ul>
      <p className="text-center">
        Para qualquer pergunta, sugestão ou histórias de aventuras piratas,
        sinta-se à vontade para nos contatar por telefone ou e-mail. Nossa
        tripulação de piratas experientes está sempre pronta para ajudá-lo a
        encontrar a bebida perfeita para o seu paladar. Se preferir nos enviar
        uma mensagem em uma garrafa, certifique-se de que ela esteja bem vedada
        e à prova d{"'"}água - não queremos que suas palavras se percam no mar!
      </p>
      <p className="text-center">
        Então, marujos, enviem-nos uma mensagem ou planejem sua viagem ao Pirate
        {"'"}s Punch em Tortuga. Estaremos esperando com um caneco de grogue e
        uma calorosa recepção pirata!
      </p>
    </main>
  );
}
