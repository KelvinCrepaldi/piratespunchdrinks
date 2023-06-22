import { fetchOrders } from "@/store/actions/orders";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function PanelCartHistory() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const { orders } = useSelector((state: any) => state.orders.orders);

  useEffect(() => {
    if (token) {
      dispatch(fetchOrders(token));
    }
  }, [token, dispatch]);
  return (
    <>
      <div>
        <h1 className="border-b font-inter">Purchases</h1>
        <div className=" bg-slate-500"></div>

        {orders?.map((order: any) => (
          <div key={order.id} className="flex flex-col m-1 p-4 bg-neutral-900">
            <div className="flex flex-col border-b-2 border-pirates-silver pb-3">
              <div className="flex justify-between mb-3 border-b border-neutral-700">
                <span>Date: {order?.created_at}</span>
                <span>id: {order?.id}</span>
              </div>

              <span>Payment: {order?.created_at}</span>
              <span>
                Status: {order?.payment_status ? "Approved" : "Denied"}
              </span>
              <span>Total: {order?.total}</span>
            </div>
            <div>
              {order.orderProducts.map((element: any) => (
                <div key={element.id} className="flex m-1 p-2 bg-neutral-800">
                  <Image
                    src={element.product.img_url}
                    alt="Mini product image"
                    width={90}
                    height={100}
                  ></Image>
                  <div className="flex flex-col ml-3">
                    <span>{element.product.name}</span>
                    <span>R$: {element.product.value} Un.</span>
                    <span>Quantity: {element.quantity}</span>
                    <span>Total: {element.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
