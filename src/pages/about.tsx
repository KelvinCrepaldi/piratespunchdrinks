import Image from "next/image";
import piratepunchlogo from "/public/images/piratepunch.png";
export default function About() {
  return (
    <main className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
      <div className="flex">
        <div className="w-full flex flex-col justify-center items-center max-w-lg ">
          <h1>About</h1>
          <h2>Pirate{"'"}s Punch</h2>
          <p className="text-center ">
            Bem-vindo a bordo, marujos, à Pirate{"'"}s Punch, a loja de bebidas
            mais pirata-tástica de Tortuga! Preparem-se para uma aventura de
            sabor e diversão enquanto navegamos pelos mares agitados da bebida
            de qualidade.
          </p>
        </div>
        <Image src={piratepunchlogo} alt="pirate punch logo" width={200} />
      </div>
      <div className="flex items-center">
        <p>
          Na Pirate{"'"}s Punch, reunimos uma tripulação de especialistas em
          licores que já enfrentaram os mais perigosos tesouros líquidos de
          todas as sete marés. Nossa equipe é formada por autênticos piratas,
          com pernas de pau, olhos de vidro e um amor incondicional por todas as
          coisas relacionadas a rum, whisky, cerveja e muito mais. Se você está
          procurando um lugar para encontrar a bebida perfeita para matar a
          sede, você veio ao lugar certo!
        </p>
        <Image src={piratepunchlogo} alt="pirate punch logo" width={250} />
      </div>
      <div className="flex flex-row-reverse items-center">
        <p>
          Nossa loja é decorada com um toque divertido e cheio de tesouros
          piratas. Penduradas nas paredes, você encontrará mapas do tesouro,
          âncoras enferrujadas, barris de rum autênticos (não se preocupe, eles
          estão vazios) e até mesmo um papagaio tagarela que sabe dar conselhos
          sobre bebidas. E não se preocupe com as teias de aranha - são apenas
          parte da nossa decoração temática!
        </p>
        <Image src={piratepunchlogo} alt="pirate punch logo" width={250} />
      </div>
      <div className="flex items-center">
        <p>
          Ahoy, marinheiros! Estamos aqui para satisfazer todas as suas
          necessidades etílicas, não importa se você é um capitão experiente em
          busca de um rum envelhecido ou um jovem pirata ansioso para
          experimentar uma cerveja de outro mundo. Temos uma seleção vasta e
          variada de bebidas, cuidadosamente saqueadas dos quatro cantos do
          globo. Dos rums do Caribe aos whiskies escoceses, das cervejas
          artesanais aos coquetéis temáticos, temos tudo o que um corsário
          ousado poderia desejar!
        </p>
        <Image src={piratepunchlogo} alt="pirate punch logo" width={250} />
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-center">
          E não se esqueça dos eventos especiais que organizamos! Toda semana,
          realizamos competições de bebedeira de arrepiar a espinha, onde os
          mais intrépidos piratas podem mostrar suas habilidades de beber e
          ganhar prêmios exclusivos. Se você sobreviver à competição, pode até
          ser coroado como o Rei dos Bêbados!
        </p>
        <p className="text-center">
          Então, prepare-se para zarpar em uma jornada épica de sabor e diversão
          na Pirate{"'"}s Punch. Estamos abertos todos os dias, das primeiras
          horas da manhã até a última baderna da noite. Lembre-se, marujos, em
          nossa loja, os clientes não são apenas clientes - são verdadeiros
          companheiros de aventuras!
        </p>
      </div>
    </main>
  );
}
