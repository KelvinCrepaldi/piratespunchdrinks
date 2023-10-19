const Journey = (): JSX.Element => {
  return (
    <section className="relative bg-adventure bg-center bg-cover min-h-[70vh] ">
      <div className="flex justify-end max-w-[1200px] mx-auto">
        <div className="relative z-10 lg:max-w-[800px] p-20">
          <h3 className="text-[#FFFBA6] font-inter text-center mb-5">
            Então, prepare-se para zarpar em uma jornada épica de sabor e
            diversão na Pirate{"'"}s Punch.
          </h3>
          <p className="font-inter text-center font-light">
            Estamos abertos todos os dias, das primeiras horas da manhã até a
            última baderna da noite.
          </p>
          <p className="font-inter text-center font-light">
            Lembre-se, marujos, em nossa loja, os clientes não são apenas
            clientes são verdadeiros companheiros de aventuras!
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70" />
    </section>
  );
};

export default Journey;
