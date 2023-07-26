import { useEffect, useState } from "react";
import SidebarFilter from "@/components/SidebarFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/reducers/productsReducer";
import CardHighlightProduct from "@/components/CardHighlightProduct";
import { RootState } from "@/store/store";
import Head from "next/head";

export default function Shop() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
      <div className="w-100  ">
        <div className="flex flex-col text-center items-center py-10">
          <h1 className="px-4 text-5xl border-b-2 border-pirates-red">
            Drinks for You!
          </h1>
          <p className="text-pirates-red">
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
        <div className="flex mx-9 ">
          <section
            className={`absolute  ${
              showMenu === false ? "-left-full" : "left-0"
            } lg:relative lg:left-0 transition-all`}
          >
            <SidebarFilter />
          </section>
          <div className="flex justify-center ">
            <main className="flex flex-wrap justify-center">
              {loading && (
                <div className="inline text-center w-full">Carregando....</div>
              )}
              {error && <h2>{error}</h2>}

              {products?.map((product: any) => (
                <CardHighlightProduct key={product.id} product={product} />
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
