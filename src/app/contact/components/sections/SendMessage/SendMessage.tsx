import Image from "next/image";

const SendMessage = (): JSX.Element => {
  return (
    <section className=" px-5 relative lg:flex justify-end max-w-[1000px] m-auto">
      <div className=" lg:max-w-[500px] ">
        <div>
          <h6 className="font-inter text-pirates-red-strong">
            Entre em contato
          </h6>
          <h4 className="text-black font-inter font-extrabold">
            Alguma duvida?
          </h4>
          <h4 className="text-black font-inter font-extrabold">
            Escreva abaixo e nos envie!
          </h4>
        </div>

        <form className="relative flex flex-col gap-3 lg:gap-5 my-5">
          <input
            placeholder="Nome completo"
            className="p-2 lg:p-3 rounded border border-zinc-300 bg-zinc-100"
          ></input>
          <input
            placeholder="Número de telefone"
            className="p-2 lg:p-3 rounded border border-zinc-300 bg-zinc-100"
          ></input>
          <input
            placeholder="E-mail"
            className="p-2 lg:p-3 rounded border border-zinc-300 bg-zinc-100"
          ></input>
          <input
            placeholder="Assunto da mensagem"
            className="p-2 lg:p-3 rounded border border-zinc-300 bg-zinc-100"
          ></input>
          <textarea className="min-h-[150px] p-2 lg:p-3 rounded border border-zinc-300 bg-zinc-100"></textarea>
          <button
            type="submit"
            className="p-4 px-6 bg-pirates-red-strong text-white font-inter rounded-lg max-w-[300px]"
          >
            ENVIAR MENSAGEM
          </button>

          <Image
            src={"/images/piratepunch.png"}
            alt="pirate punch logo"
            width={500}
            height={500}
            className="absolute -left-[200px] lg:-left-[20vw] lg:top-0 top-10 -z-10 opacity-20"
          />
        </form>
      </div>
    </section>
  );
};

export default SendMessage;
