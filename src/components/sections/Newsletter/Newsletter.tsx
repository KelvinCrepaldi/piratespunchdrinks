import { Button } from "@/components/_ui/Button/Button";

const Newsletter = () => {
  return (
    <section className="w-full py-20 px-5 bg-slate-300">
      <div className="max-w-[1200px] flex flex-col items-center justify-center mx-auto">
        <h2 className="text-black mb-5">Junte-se à Tripulação Pirata</h2>
        <p className="text-center text-zinc-700 font-bold">
          Desbloqueie tesouros exclusivos e seja o primeiro a saber sobre nossas
          atualizações piratas. Inscreva-se em nossa newsletter para receber
          regularmente os tesouros diretamente na sua caixa de entrada.
        </p>
      </div>

      <form className="flex flex-col items-center justify-center">
        <input
          placeholder="Seu Endereço de E-mail"
          className="border border-zinc-400 p-3 m-5 rounded max-w-[400px] w-full"
        ></input>
        <div className="max-w-fit">
          <button className="hover:bg-zinc-400 bg-zinc-50 font-bold text-xl p-3 rounded-lg shadow">
            Partir Rumo ao Desconhecido
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
