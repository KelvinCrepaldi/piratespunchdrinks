import { useSelector } from "react-redux";
export default function Cart() {
  const cartList = useSelector((state: any) => state.cart.cartList);

  return (
    <div className="flex flex-col max-w-5xl m-auto min-h-screen ">
      <div className="border-b border-pirates-red w-full">
        <h1 className="font-fredericka">Cart</h1>
      </div>
      <div className="flex">
        <div className="w-full bg-red-200">a</div>
        <div className="flex flex-col w-96 bg-blue-200 m-2">
          <div className="bg-slate-900">a</div>
          <div className="bg-slate-900">a</div>
        </div>
      </div>
    </div>
  );
}
