import { useEffect } from "react";
import Navbar from "./Navbar";
import { ILayoutProps } from "@/interfaces/layout.interface";
import { Footer } from "./Footer";

import { useAppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/actions/products";

export default function Layout({ children }: ILayoutProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener("beforeunload", () => {
      dispatch(fetchProducts());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}
