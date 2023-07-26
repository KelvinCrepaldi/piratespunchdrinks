import Navbar from "./Navbar";
import { ILayoutProps } from "@/interfaces/layout.interface";
import { Footer } from "./Footer";

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}
