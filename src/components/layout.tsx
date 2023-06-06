import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ILayout } from "@/interfaces/layout.interface";
export default function Layout({ children }: ILayout) {
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      {children}
      <div>footer</div>
    </>
  );
}
