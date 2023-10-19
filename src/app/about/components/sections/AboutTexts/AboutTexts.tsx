import Image from "next/image";

const AboutTexts = (): JSX.Element => {
  return (
    <section>
      <div className=" w-full  bg-zinc-900">
        <div className="relative  max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center py-5">
          <Image
            className="m-5 rounded  border-pirates-black-transparent
          lg:relative -bottom-16"
            src={"/images/man.webp"}
            alt="pirate punch logo"
            width={300}
            height={300}
          />
          <p className="text-white text-center font-inter font-bold">
            Na Pirate{"'"}s Punch, reunimos uma tripulação de especialistas em
            licores que já enfrentaram os mais perigosos tesouros líquidos de
            todas as sete marés. Nossa equipe é formada por autênticos piratas,
            com pernas de pau, olhos de vidro e um amor incondicional por todas
            as coisas relacionadas a rum, whisky, cerveja e muito mais. Se você
            está procurando um lugar para encontrar a bebida perfeita para matar
            a sede, você veio ao lugar certo!
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="relative max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center py-5">
          <p className="text-black text-center font-inter font-bold">
            Nossa loja é decorada com um toque divertido e cheio de tesouros
            piratas. Penduradas nas paredes, você encontrará mapas do tesouro,
            âncoras enferrujadas, barris de rum autênticos (não se preocupe,
            eles estão vazios) e até mesmo um papagaio tagarela que sabe dar
            conselhos sobre bebidas. E não se preocupe com as teias de aranha -
            são apenas parte da nossa decoração temática!
          </p>
          <Image
            className="m-5 rounded  border-pirates-black-transparent
          lg:relative -bottom-16"
            src={"/images/barPhoto.webp"}
            alt="pirate punch logo"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className=" w-full bg-zinc-900">
        <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center py-5">
          <Image
            className="m-5 rounded border-pirates-black-transparent
         "
            src={"/images/drink.webp"}
            alt="pirate punch logo"
            width={300}
            height={300}
          />
          <p className="text-white text-center font-inter font-bold">
            Ahoy, marinheiros! Estamos aqui para satisfazer todas as suas
            necessidades etílicas, não importa se você é um capitão experiente
            em busca de um rum envelhecido ou um jovem pirata ansioso para
            experimentar uma cerveja de outro mundo. Temos uma seleção vasta e
            variada de bebidas, cuidadosamente saqueadas dos quatro cantos do
            globo. Dos rums do Caribe aos whiskies escoceses, das cervejas
            artesanais aos coquetéis temáticos, temos tudo o que um corsário
            ousado poderia desejar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTexts;
