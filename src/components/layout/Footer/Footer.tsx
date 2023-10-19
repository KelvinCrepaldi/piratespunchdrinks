import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full flex flex-col items-center bg-black  py-10">
      <div className="max-w-[1300px] flex flex-col md:flex-row">
        <nav className="md:w-1/3 space-y-4 flex flex-col text-center  border-t md:border-r md:border-t-0 p-4 m-5">
          <ul>
            <li>
              <Link className="hover:text-blue-300" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/shop"}>
                Loja
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/about"}>
                Sobre
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-300" href={"/contact"}>
                Contato
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/profile"}>
                Perfil
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/profile/address"}>
                Endereços
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                href={"/profile/creditCards"}
              >
                Cartões de crédito
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-300" href={"/profile/purchases"}>
                Histórico de compras
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:w-1/3 space-y-4 flex flex-col text-center border-t  md:border-t-0 p-4 m-5">
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
        <div className="md:w-1/3 space-y-4 flex flex-col text-center border-t md:border-l md:border-t-0  p-4 m-5">
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
