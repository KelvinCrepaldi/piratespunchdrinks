"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@/components/_ui/Pagination";
import { SidebarFilter } from "./components/SidebarFilter";
import { Control } from "./components/Control/Control";
import { ListProducts } from "./components/ListProducts/ListProducts";

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
        <div className="flex flex-col items-center"></div>

        <div className="flex mx-9 md:justify-center">
          <SidebarFilter />
          <div className="w-full max-w-[1080px]">
            <div>
              <div className="flex ">
                <Control></Control>
              </div>
            </div>

            <main className="w-full grid grid-cols-2 sm:grid-cols-3 xl:flex md:flex-row md:flex-wrap content-between max-w-[1080px]">
              <ListProducts />
            </main>
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
