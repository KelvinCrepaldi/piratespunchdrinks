import { useState, useEffect } from "react";
import ShopFilter from "@/components/ShopFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/actions";
import ProductCard from "@/components/ProductCard";
import type {} from "redux-thunk/extend-redux";

export default function Shop() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener("beforeunload", () => {
      dispatch(fetchProducts());
    });
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-100 mx-auto md:p-16">
      <div className="flex-col items-center text-center w-full">
        <h1>Shop</h1>
        <h2>Home page {">"} Products</h2>
      </div>
      <div className="flex flex-col ">
        <div className="flex w-full md:max-w-xs px-5 py-2">
          <button className="text-3xl mr-2 md:hidden" onClick={handleShowMenu}>
            <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
          </button>
          <select className="w-52 h-10 bg-transparent font-imfell rounded border border-pirates-silver">
            <option className="bg-pirates-black">Sort by newest</option>
            <option className="bg-pirates-black">Sort by oldest</option>
            <option className="bg-pirates-black">
              Sort by ascending price
            </option>
            <option className="bg-pirates-black">
              Sort by descending price
            </option>
          </select>
        </div>
      </div>
      <div className="flex">
        <section
          className={`absolute ${
            showMenu === false ? "-left-full" : "left-0"
          } md:relative md:left-0 transition-all`}
        >
          <ShopFilter />
        </section>
        <main className="flex flex-wrap content-start px-5 ">
          {products?.map((product: any) => (
            <ProductCard key={product.id} product={product} type="big" />
          ))}
        </main>
      </div>
    </div>
  );
}
