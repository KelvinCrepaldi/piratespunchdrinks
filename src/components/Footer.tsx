import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center bg-black  py-10">
      <div className=" max-w-5xl flex">
        <div className="w-1/3 space-y-4 flex flex-col text-center  border-r p-4">
          <ul>
            <li>
              <Link className="hover:text-blue-300" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/user"}>
                User Page
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3 space-y-4 flex flex-col text-center border-l border-r p-4">
          <p className="font-inter text-sm">
            PiratesPunch - Este site é puramente fictício e os produtos listados
            são apenas para fins de demonstração. Não vendemos bebidas
            alcoólicas reais ou incentivamos qualquer atividade ilegal
            relacionada a pirataria.
          </p>
          <p className="font-inter text-sm">
            {" "}
            Navegue à vontade em nosso catálogo virtual, onde você encontrará
            uma variedade de bebidas piratas exclusivas. De rum envelhecido em
            barris secretos a licores com sabores exóticos, oferecemos uma
            experiência única para os amantes de aventuras e histórias piratas.
          </p>
          <p className="font-inter text-sm">
            No entanto, gostaríamos de enfatizar que todas as informações sobre
            os produtos, incluindo descrições, preços e avaliações, são
            fictícias e criadas apenas para proporcionar uma experiência
            divertida e imersiva. Não efetuaremos vendas ou entregas de produtos
            reais.
          </p>
        </div>
        <div className="w-1/3 space-y-4 flex flex-col text-center border-l  p-4">
          <p className="font-inter text-sm">
            Endereço da Loja: Pirate{"'"}s Punch - Sede dos Piratas Sedentos!
            Ilha Tortuga, Mar do Caribe
          </p>
          <p className="font-inter text-sm">
            Horário de Funcionamento: Segunda a sexta-feira: das 10h00 às 23h00
            Sábado e domingo: das 12h00 à 01h00{" "}
          </p>
          <p className="font-inter text-sm">
            Informações de Contato: Telefone: +1-555-PUNCHY E-mail:
            info@piratespunch.com
          </p>
        </div>
      </div>

      <div className="mt-10 text-green-200">
        Criado por{" "}
        <Link
          className="text-green-400"
          href={"https://kelvincrepaldi.vercel.app/"}
        >
          Kelvin Crepaldi
        </Link>{" "}
        - com Next.js + tailwind
      </div>
    </footer>
  );
};
