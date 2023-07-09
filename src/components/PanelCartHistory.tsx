import { fetchOrders } from "@/store/actions/orders";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListPurchase from "./ListPurchase";
import { RootState, useAppDispatch } from "@/store/store";
import { IOrder } from "@/interfaces/order.interface";

export default function PanelCartHistory() {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.auth);
  const orders = useSelector((state: RootState) => state.orders.orders);

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

        {orders.map((order: IOrder) => (
          <div
            key={order.id}
            className="flex flex-col m-1 p-4 bg-neutral-900 rounded"
          >
            <div className="flex flex-col  pb-3">
              <div className="flex justify-between mb-3 border-b border-pirates-red">
                <span>Date: {order.created_at.toString()}</span>
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

            <ListPurchase key={order.id} products={order.orderProducts} />
          </div>
        ))}
      </div>
    </>
  );
}
