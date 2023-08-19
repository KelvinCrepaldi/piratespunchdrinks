import { Header } from "@/components/layout/Header";
import { SidebarCart } from "@/components/layout/SidebarCart";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { ReactNode } from "react";

export interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps): JSX.Element {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <SidebarCart handleShowCart={handleShowCart} showCart={showCart} />
      <Header handleShowCart={handleShowCart} />
      <div className="bg-pirates-black-transparent min-h-[80vh] p-5">
        {children}
      </div>
      <Footer />
    </div>
  );
}
