"use client";
import { fetchOrders } from "@/store/reducers/ordersReducer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { IOrder } from "@/interfaces/order.interface";
import { CardPurchase } from "./components/CardPurchase/CardPurchase";

export default function Purchases(): JSX.Element {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.auth);
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    if (token) {
      dispatch(fetchOrders());
    }
  }, [token, dispatch]);

  return (
    <>
      <div>
        <h4 className="border-b-2 font-inter border-pirates-red  flex justify-between ">
          Meu histórico de compras
        </h4>
        <div className=" bg-slate-500"></div>

        {orders.map((order: IOrder) => (
          <CardPurchase order={order} key={order.id}></CardPurchase>
        ))}
      </div>
    </>
  );
}
