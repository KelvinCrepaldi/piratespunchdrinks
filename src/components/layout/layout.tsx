"use client";
import { ReactNode, useState } from "react";
import { SidebarCart } from "@/components/layout/SidebarCart";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <SidebarCart handleShowCart={handleShowCart} showCart={showCart} />
      <Header handleShowCart={handleShowCart} />
      {children}
      <Footer></Footer>
    </>
  );
};
