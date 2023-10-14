import { Pagination } from "@/app/shop/components/Pagination";
import { SidebarFilter } from "./components/SidebarFilter";
import { Control } from "./components/Control/Control";
import { ListProducts } from "./components/ListProducts/ListProducts";
import Newsletter from "@/components/sections/Newsletter/Newsletter";

export default function Shop(): JSX.Element {
  return (
    <>
      <main className="">
        <div className="flex flex-col text-center items-center py-5">
          <h1 className="inline-block border-b-2 px-5 border-pirates-red text-6xl font-fredericka">
            Bebidas para você!
          </h1>
          <p className="text-pirates-red font-pirata">
            Navegue em alto mar para saborear bebidas deliciosas!
          </p>
        </div>
        <div className="flex mx-9 md:justify-center mb-20">
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
