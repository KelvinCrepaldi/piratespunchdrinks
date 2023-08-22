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

export default function Shop(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { products, error, loading, searchWord } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    searchWord
      ? dispatch(fetchProducts({ search: searchWord }))
      : dispatch(fetchProducts({}));
  }, [dispatch, searchWord]);

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
        <div className="flex flex-col text-center items-center py-10">
          <h1 className="inline-block border-b-2 px-5 border-pirates-red text-6xl font-fredericka">
            Drinks for You!
          </h1>
          <p className="text-pirates-red font-pirata">
            Sail the high seas for delightful drinks!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full   py-2">
            <button
              className="text-3xl mr-2 lg:hidden ml-4"
              onClick={handleShowMenu}
            >
              <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="flex mx-9 md:justify-center">
          <section
            className={`absolute  ${
              showMenu === false ? "-left-full" : "left-0"
            } lg:relative lg:left-0 transition-all`}
          >
            <SidebarFilter />
          </section>

          <main className="w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap content-start max-w-[1080px]">
            {loading && (
              <div className="text-center w-full">Carregando....</div>
            )}
            {error && <h2>{error}</h2>}

            {products?.map((product: any) => (
              <CardHighlightProduct key={product.id} product={product} />
            ))}
          </main>
        </div>
      </main>
    </>
  );
}
