import { useState } from "react";
import SidebarFilter from "@/components/SidebarFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "@/components/ProductCard";
import type {} from "redux-thunk/extend-redux";

export default function Shop() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  /*   useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener("beforeunload", () => {
      dispatch(fetchProducts());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-100  ">
      <div className="flex flex-col text-center items-center">
        <h1 className="px-4 text-5xl border-b-2 border-pirates-red">
          Drinks for You!
        </h1>
        <p className="text-pirates-red">
          Sail the high seas for delightful drinks!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex w-full md:max-w-xs  py-2">
          <button className="text-3xl mr-2 lg:hidden" onClick={handleShowMenu}>
            <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div className="flex">
        <section
          className={`absolute bg-pirates-black ${
            showMenu === false ? "-left-full" : "left-0"
          } lg:relative lg:left-0 transition-all`}
        >
          <SidebarFilter />
        </section>

        <main className="flex flex-wrap content-start justify-center w-full bg-neutral-950 p-2 m-3 rounded-2xl">
          {products?.map((product: any) => (
            <ProductCard key={product.id} product={product} type="big" />
          ))}
        </main>
      </div>
    </div>
  );
}
