import LinkButton from "@/components/_ui/LinkButton/LinkButton";
import piratespunch from "/public/images/piratepunch.png";
import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-5 flex items-center m-auto flex-col-reverse lg:flex-row bg-hero bg- bg-center">
      <div className="text-center p-10 lg:w-2/3">
        <h1 className="inline-block border-b-2 px-5 border-pirates-red text-5xl md:text-6xl font-fredericka ">
          Pirate{"'"}s Punch
        </h1>
        <h2 className="mb-4 text-2xl md:text-3xl font-pirata">
          Se prepare para o {"'"}soco{"'"} mais intenso dos sete mares!
        </h2>
        <p className="text-lg md:text-xl md:px-3 font-fredericka max-w-[600px] m-auto">
          No Pirate{"'"}s Punch, nossas bebidas vão te deixar {"'"}
          atordoado de sabor{"'"}, navegando por uma tempestade de sabores
          piratas irresistíveis.
        </p>
        <div className=" m-5 ">
          <LinkButton href={"/shop"}>Compre agora!</LinkButton>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center ">
        <Image
          src={piratespunch}
          width={300}
          alt="pirates punch logo"
          className="inline-block"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
