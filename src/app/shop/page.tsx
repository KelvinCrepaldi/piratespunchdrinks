"use client";
import { useEffect, useState } from "react";
import { SidebarFilter } from "@/components/shop/SidebarFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/reducers/productsReducer";
import { CardHighlightProduct } from "@/components/_ui/CardHighlightProduct";
import { RootState } from "@/store/store";
import Head from "next/head";
import { Pagination } from "@/components/_ui/Pagination";
import { Control } from "@/components/shop/Control/Control";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";

export default function Shop(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state: RootState) => state.products
  );

  const { date, name, take, price } = useSelector(
    (state: RootState) => state.products.control
  );
  const { category, searchWord } = useSelector(
    (state: RootState) => state.products.filter
  );

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch, searchWord, category, date, name, take, price]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Head>
        <title>Shop - Pirates Punch Drinks</title>
        <meta name="description" content="Pirates Punch Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <section
            className={`absolute  ${
              showMenu === false ? "-left-full" : "left-0"
            } lg:relative lg:left-0 transition-all`}
          >
            <SidebarFilter handleShowMenu={handleShowMenu} />
          </section>
          <div className="w-full max-w-[1080px]">
            <div>
              <div className="flex ">
                <button
                  className="bg-pirates-black-transparent-strong w-9 h-9 rounded border border-zinc-800 mx-1 lg:hidden"
                  onClick={handleShowMenu}
                >
                  <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                </button>
                <Control></Control>
              </div>
            </div>

            <main className="w-full grid grid-cols-2 sm:grid-cols-3 xl:flex md:flex-row md:flex-wrap content-between max-w-[1080px]">
              {loading && (
                <div className="text-center w-full">
                  <LoadingSpinner />
                </div>
              )}
              {error && <h2>{error}</h2>}

              {products?.map((product: any) => (
                <CardHighlightProduct key={product.id} product={product} />
              ))}
            </main>
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
