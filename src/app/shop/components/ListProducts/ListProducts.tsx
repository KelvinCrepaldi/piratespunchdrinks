"use client";
import { CardProduct } from "@/components/_ui/CardProduct";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";
import { fetchProducts } from "@/store/reducers/productsReducer";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ListProducts = () => {
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

  return (
    <>
      {loading && (
        <div className="text-center w-full">
          <LoadingSpinner />
        </div>
      )}
      {error && <h2>{error}</h2>}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map((product: any) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
