import { fetchOrders } from "@/store/reducers/ordersReducer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListPurchase } from "./components/ListPurchase";
import { RootState, useAppDispatch } from "@/store/store";
import { IOrder } from "@/interfaces/order.interface";
import formatReal from "@/utils/formatReal";
import { CardPurchase } from "./components/CardPurchase/CardPurchase";

export function PanelCartHistory(): JSX.Element {
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
        <h1 className="border-b-2 font-inter border-pirates-red  flex justify-between ">
          Purchases
        </h1>
        <div className=" bg-slate-500"></div>

        {orders.map((order: IOrder) => (
          <CardPurchase order={order} key={order.id}></CardPurchase>
        ))}
      </div>
    </>
  );
}
