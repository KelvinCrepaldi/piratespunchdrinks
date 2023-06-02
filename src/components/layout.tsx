import Navbar from "./Navbar";
import { ILayout } from "@/interfaces/layout.interface";
export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
      <div>footer</div>
    </>
  );
}
