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

  const showPaymetType = (status: string) => {
    if (status === "PENDING") {
      return "text-yellow-700";
    }
    if (status === "AUTHORIZED") {
      return "text-green-400";
    }
    if (status === "CANCELLED") {
      return "text-red-400";
    }
  };

  console.log(orders);
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
                <span>Date: {order.createdAt.toString()}</span>
                <span>id: {order?.id}</span>
              </div>

              <span>
                Payment status:{" "}
                <span className={showPaymetType(order.paymentStatus)}>
                  {order.paymentStatus}
                </span>
              </span>
              <span>
                Credit Card: <span>{order.creditCard?.number}</span>
              </span>
              <span>
                Address:
                <span>
                  {order.address.address}, {order.address.number}, cep:
                  {order.address.cep}
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
