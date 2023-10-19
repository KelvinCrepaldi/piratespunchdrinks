import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faTruck,
  faMedal,
  faCoins,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

interface highlightType {
  icon: IconDefinition;
  title: string;
  text: string;
}

const highlights = [
  {
    icon: faTruck,
    title: "Envio Sem Marés",
    text: "Frete Grátis Acima de R$50",
  },
  {
    icon: faMedal,
    title: "Rum Autêntico",
    text: "Certificado de Qualidade Pirata",
  },
  {
    icon: faCoins,
    title: "Preços Corsários",
    text: "Economize sem Arrebentar o Cofre",
  },
  {
    icon: faRecycle,
    title: "Garrafas Recuperáveis",
    text: "Sustentabilidade dos Sete Mares",
  },
];

const HighlightedBenefits = (): JSX.Element => {
  return (
    <section className="w-full bg-zinc-950 p-3 ">
      <div className="max-w-[1300px] mx-auto lg:flex lg:justify-center">
        {highlights.map((highlight: highlightType, index: number) => (
          <div
            key={index}
            className="py-3 px-5 m-3 bg-zinc-900 rounded flex items-center"
          >
            <span className="text-3xl text-pirates-gold pr-5">
              <FontAwesomeIcon icon={highlight.icon} />
            </span>

            <div className="">
              <h6>{highlight.title}</h6>
              <p>{highlight.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightedBenefits;
