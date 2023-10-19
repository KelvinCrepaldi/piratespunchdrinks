import { Pagination } from "@/app/shop/components/Pagination";
import { SidebarFilter } from "./components/SidebarFilter";
import { Control } from "./components/Control/Control";
import { ListProducts } from "./components/ListProducts/ListProducts";
import Newsletter from "@/components/sections/Newsletter/Newsletter";
import Image from "next/image";

export default function Shop(): JSX.Element {
  return (
    <>
      <main className="">
        <div className="relative flex flex-col text-center items-center py-5">
          <h1 className="text-pirates-red-strong border-b-4 border-pirates-red-strong font-imfell">
            Bebidas para você!
          </h1>
          <p className="text-pirates-red-strong font-pirata">
            Navegue em alto mar para saborear bebidas deliciosas!
          </p>

          <Image
            src={"/backgroundTexture/piratemaptexture.svg"}
            width={600}
            height={300}
            alt="background pirate map texture"
            className="absolute top-0 left-0 w-1/3 opacity-30"
          ></Image>
          <Image
            src={"/backgroundTexture/piratemaptexture.svg"}
            width={600}
            height={300}
            alt="background pirate map texture"
            className="absolute top-0 right-0 rotate-180 w-1/3 opacity-30"
          ></Image>
        </div>
        <div className="relative flex mx-9 md:justify-center mb-20 max-w-[1300px] lg:mx-auto">
          <SidebarFilter />
          <div className="w-full max-w-[1080px]">
            <Control></Control>
            <main className="">
              <ListProducts />
            </main>
            <Pagination />
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
