import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ILayout } from "@/interfaces/layout.interface";

import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/actions/products";

export default function Layout({ children }: ILayout) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener("beforeunload", () => {
      dispatch(fetchProducts());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <div>footer</div>
    </>
  );
}
