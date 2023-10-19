import Image from "next/image";

const FarewellMessage = (): JSX.Element => {
  return (
    <section className=" relative w-full my-20 pb-20 px-5">
      <Image
        src={"/backgroundTexture/piratemaptexture.svg"}
        width={600}
        height={300}
        alt="background pirate map texture"
        className="absolute -top-10 left-0 w-1/3 opacity-40 hidden lg:block"
      ></Image>
      <h3 className="text-center text-pirates-red-strong max-w-[1200px] mx-auto ">
        Então, marujos, enviem-nos uma mensagem ou planejem sua viagem ao Pirate
        {"'"}s Punch em Tortuga. Estaremos esperando com um caneco de grogue e
        uma calorosa recepção pirata!
      </h3>
      <Image
        src={"/backgroundTexture/piratemaptexture.svg"}
        width={600}
        height={300}
        alt="background pirate map texture"
        className="absolute -top-10 right-0 rotate-180 w-1/3  opacity-40 hidden lg:block"
      ></Image>
    </section>
  );
};
export default FarewellMessage;
