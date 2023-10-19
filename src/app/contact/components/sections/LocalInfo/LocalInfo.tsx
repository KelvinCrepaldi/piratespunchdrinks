const LocalInfo = (): JSX.Element => {
  return (
    <section className="max-w-[1300px] w-full mx-auto lg:flex lg:gap-2 lg:justify-center lg:px-5">
      <div className="bg-zinc-100 shadow-md p-10 my-2 lg:w-1/3 flex flex-col justify-between">
        <h4 className="text-black font-inter mb-10">Localização</h4>
        <div>
          <p className="text-black font-inter font-extrabold">
            Pirate{"'"}s Punch
          </p>
          <p className="text-black font-inter ">
            Sede dos Piratas Sedentos! Ilha Tortuga, Mar do Caribe
          </p>
        </div>
      </div>

      <div className="bg-zinc-100 shadow-md p-10 my-2 lg:w-1/3 flex flex-col justify-between">
        <h4 className="text-black font-inter mb-10 ">
          Horário de funcionamento{" "}
        </h4>
        <div>
          <p className="text-black font-inter">
            <span className="font-extrabold text-black">
              Segunda a sexta-feira:
            </span>{" "}
            das 10h00 às 23h00
          </p>
          <p className="text-black  font-inter ">
            <span className="font-extrabold text-black">
              Sábado e domingo:{" "}
            </span>
            das 12h00 à 01h00
          </p>
        </div>
      </div>

      <div className="bg-zinc-100 shadow-md p-10 my-2 lg:w-1/3 flex flex-col justify-between">
        <h4 className="text-black font-inter mb-10">Contato</h4>
        <div>
          <p className="text-black  font-inter ">
            <span className="font-extrabold text-black">Telefone: </span>
            +1-555-PUNCHY
          </p>
          <p className="text-black  font-inter ">
            <span className="font-extrabold text-black">E-mail:</span>
            info@piratespunch.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalInfo;
