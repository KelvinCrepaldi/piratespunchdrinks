import { fetchOrders } from "@/store/reducers/ordersReducer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListPurchase } from "../ListPurchase";
import { RootState, useAppDispatch } from "@/store/store";
import { IOrder } from "@/interfaces/order.interface";
import formatReal from "@/utils/formatReal";

export function PanelCartHistory(): JSX.Element {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.auth);
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    if (token) {
      dispatch(fetchOrders());
    }
  }, [token, dispatch]);

  const showPaymetType = {
    PENDING: "text-yellow-700",
    AUTHORIZED: "text-green-400",
    CANCELLED: "text-red-400",
  };

  return (
    <>
      <div>
        <h1 className="border-b-2 font-inter border-pirates-red  flex justify-between ">
          Purchases
        </h1>
        <div className=" bg-slate-500"></div>

        {orders.map((order: IOrder) => (
          <div
            key={order.id}
            className="flex flex-col m-2 p-3 bg-neutral-900 rounded font-inter"
          >
            <div className="flex flex-col  pb-3">
              <div className="flex justify-between mb-3 border-b border-pirates-red">
                <span className="">Date: {order.createdAt.toString()}</span>
                <span>id: {order?.id}</span>
              </div>

              <span>
                Payment status:{" "}
                <span className={showPaymetType[order.paymentStatus]}>
                  {order.paymentStatus}
                </span>
              </span>
              <div className="border-b border-pirates-black p-1 mb-1">
                <h3 className="font-inter text-lg">Address:</h3>

                <span>
                  <p className="font-inter text-base">
                    {" "}
                    <span className="text-pirates-gold">Name: </span>
                    {order.address.address},
                    <span className="text-pirates-gold"> Number: </span>
                    {order.address.number},
                    <span className="text-pirates-gold"> Complement: </span>
                    {order.address.complement}
                  </p>
                  <p className="font-inter text-base">
                    <span className="text-pirates-gold">CEP: </span>
                    {order.address.cep},
                    <span className="text-pirates-gold"> City: </span>
                    {order.address.city},
                    <span className="text-pirates-gold"> State: </span>
                    {order.address.state},
                    <span className="text-pirates-gold"> Country: </span>
                    {order.address.country}
                  </p>
                  <p className="font-inter text-base"></p>
                </span>
              </div>

              <div className=" p-1 mb-1 font-inter text-base border-b border-pirates-black ">
                <h3 className="font-inter text-lg">Credit Card: </h3>
                <span className="text-pirates-gold">Number: </span>
                {order.creditCard?.number}
                <span className="text-pirates-gold"> Name: </span>
                {order.creditCard?.name}
              </div>

              <span>Total: {formatReal(parseFloat(order?.total))}</span>
            </div>

            <ListPurchase key={order.id} products={order.orderProducts} />
          </div>
        ))}
      </div>
    </>
  );
}
