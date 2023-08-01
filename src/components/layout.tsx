import Header from "./Header";
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
      <Header handleShowCart={handleShowCart} />
      <div className="bg-pirates-black-transparent">{children}</div>
      <Footer />
    </div>
  );
}
