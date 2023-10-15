import LinkButton from "@/components/_ui/LinkButton/LinkButton";
import Link from "next/link";

const PiratesPromoEvents = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col md:flex-row bg-slate-300 justify-center md:items-end items-center py-5">
      <div
        className="relative m-1 p-5 max-w-[350px] bg-zinc-200  rounded min-h-[400px] flex flex-col
       justify-end items-center bg-Person bg-cover bg-center shadow-xl mb-5
       "
      >
        <p className="relative z-10 text-center font-bold text-white">
          Ahoy, marujos! Vá à terra firme com sua melhor fantasia de pirata e
          garanta um desconto de 10%. Prepare-se para uma aventura épica no
          nosso bar!
        </p>
        <div className="absolute top-0 left-0 bg-blue-950 w-full h-full opacity-60 rounded" />
        <div className="absolute top-[2px] left-[2px]  w-[calc(100%-4px)] h-[calc(100%-4px)] opacity-50 border border-white rounded" />
      </div>

      <div
        className="relative m-1 p-5 max-w-[350px] bg-zinc-900 rounded min-h-[500px] flex flex-col
       justify-around items-center bg-Ship bg-cover bg-center shadow-xl"
      >
        <h4 className="text-white relative z-10 text-center mb-10">
          Junte-se a nós! Sua jornada pirata começa aqui.
        </h4>
        <div className="relative z-10">
          <LinkButton href={"/contact"}>Entre em contato!</LinkButton>
        </div>
        <div className="absolute top-0 left-0 bg-blue-950 w-full h-full opacity-60 rounded" />
        <div className="absolute top-[2px] left-[2px]  w-[calc(100%-4px)] h-[calc(100%-4px)] opacity-50 border border-white rounded" />
      </div>

      <div
        className="relative m-1 p-5 max-w-[350px] bg-zinc-200 rounded min-h-[400px] flex flex-col
       justify-end items-center bg-Bar bg-cover bg-center shadow-xl mb-5
       "
      >
        <p className="relative z-10 text-center font-bold text-white">
          Embarque em nossa loja de bebidas com decoração temática de navio
          pirata. Sinta-se como se estivesse navegando nos sete mares enquanto
          escolhe suas bebidas favoritas.
        </p>
        <div className="absolute top-0 left-0 bg-blue-950 w-full h-full opacity-60 rounded" />
        <div className="absolute top-[2px] left-[2px]  w-[calc(100%-4px)] h-[calc(100%-4px)] opacity-50 border border-white rounded" />
      </div>
    </section>
  );
};

export default PiratesPromoEvents;
