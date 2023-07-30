import Navbar from "./Navbar";
import { ILayoutProps } from "@/interfaces/layout.interface";
import { Footer } from "./Footer";
import SidebarCart from "./SidebarCart";
import { useState } from "react";

export default function Layout({ children }: ILayoutProps) {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
      <SidebarCart handleShowCart={handleShowCart} showCart={showCart} />
      <Navbar handleShowCart={handleShowCart} />
      {children}
      <Footer />
    </div>
  );
}
