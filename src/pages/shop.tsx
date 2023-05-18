import { useState, useEffect } from "react";
import ShopFilter from "@/components/ShopFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/actions";
import type {} from "redux-thunk/extend-redux";

export default function Shop() {
  const [showMenu, setShowMenu] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
    setProductsList(products);
  }, [dispatch, products]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-100 mx-auto md:p-16">
      <div className="flex flex-col md:flex-row-reverse ">
        <div className="flex-col items-center text-center mb-5 w-full">
          <h1>Shop</h1>
          <h2>Home page {">"} Products</h2>
        </div>
        <div className="flex w-full md:max-w-xs md:items-end">
          <button className="text-3xl mr-2 md:hidden" onClick={handleShowMenu}>
            <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
          </button>
          <select className="w-full h-10 bg-transparent ">
            <option>Sort by</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <section
          className={`absolute ${
            showMenu === false ? "-left-full" : "left-0"
          } md:static max-w-xs w-full border border-black transition-all`}
        >
          <ShopFilter
            productsList={productsList}
            setProductsList={setProductsList}
          />
        </section>
        <main className="flex flex-wrap justify-center">
          {productsList?.map((product: any) => (
            <div key={product.id}>{product?.name}</div>
          ))}
        </main>
      </div>
    </div>
  );
}
