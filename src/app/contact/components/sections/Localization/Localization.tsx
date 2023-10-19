import Image from "next/image";

const Localization = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto my-20">
      <div className="relative aspect-video  w-full lg:w-1/2 ">
        <Image
          className=" rounded xl border-4 border-pirates-black-transparent"
          src={"/images/tortuga.jpg"}
          alt="pirate punch logo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="lg:w-1/2 p-5 lg:p-10">
        <p className="text-pirates-red-strong font-inter font-bold mb-5">
          A Ilha Tortuga é um paraíso pirata lendário, mas não se preocupe, nós
          o ajudaremos a encontrar o caminho! Ao chegar na ilha, pergunte a
          qualquer marujo local ou siga o aroma de rum que paira no ar. Estamos
          localizados na avenida principal dos piratas, convenientemente
          situados entre a Taverna da Jolly Roger e a Emporium dos Tesouros do
          Barba Negra. Procure pela nossa inconfundível placa do Pirate{"'"}s
          Punch, adornada com caveiras e ossos cruzados.
        </p>
        <p className="text-black font-inter font-bold">
          Para qualquer pergunta, sugestão ou histórias de aventuras piratas,
          sinta-se à vontade para nos contatar por telefone ou e-mail. Nossa
          tripulação de piratas experientes está sempre pronta para ajudá-lo a
          encontrar a bebida perfeita para o seu paladar. Se preferir nos enviar
          uma mensagem em uma garrafa, certifique-se de que ela esteja bem
          vedada e à prova d{"'"}água - não queremos que suas palavras se percam
          no mar!
        </p>
      </div>
    </section>
  );
};

export default Localization;
