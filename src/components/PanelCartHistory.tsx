import { fetchOrders } from "@/store/actions/orders";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PurchaseList from "./PurchaseList";

export default function PanelCartHistory() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const { orders } = useSelector((state: any) => state.orders.orders);

  console.log(orders);

  useEffect(() => {
    if (token) {
      dispatch(fetchOrders(token));
    }
  }, [token, dispatch]);
  return (
    <>
      <div>
        <h1 className="border-b font-inter ">Purchases</h1>
        <div className=" bg-slate-500"></div>

        {orders?.map((order: any) => (
          <div
            key={order.id}
            className="flex flex-col m-1 p-4 bg-neutral-900 rounded"
          >
            <div className="flex flex-col  pb-3">
              <div className="flex justify-between mb-3 border-b border-pirates-red">
                <span>Date: {order?.created_at}</span>
                <span>id: {order?.id}</span>
              </div>

              <span>
                Payment:{" "}
                <span
                  className={`${
                    order?.payment_status ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {order?.payment_status ? "Approved" : "Denied"}{" "}
                </span>
              </span>
              <span>Total: {order?.total}</span>
            </div>

            <PurchaseList key={order.id} products={order.orderProducts} />
          </div>
        ))}
      </div>
    </>
  );
}
