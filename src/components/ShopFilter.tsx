import Link from "next/link";
import Navbar from "./Navbar";
export default function ShopFilter({ productsList, setProductsList }: any) {
  return (
    <section>
      <h1>Product Categories</h1>
      <ul>test</ul>

      <h1>Filter by Price</h1>
      <div>
        Price: xxxx - xxxxx <button>filter</button>
      </div>

      <h1>Best Seller</h1>
      <div className="w-44 h-60 bg-black m-5">Item</div>
      <div className="w-44 h-60 bg-black m-5">Item</div>
      <div className="w-44 h-60 bg-black m-5">Item</div>
      <div className="w-44 h-60 bg-black m-5">Item</div>
      <div className="w-44 h-60 bg-black m-5">Item</div>
    </section>
  );
}
