import { ListPurchase } from "../ListPurchase";
import { IOrder } from "@/interfaces/order.interface";
import formatReal from "@/utils/formatReal";
import formatDate from "@/utils/formatDate";

interface ICardPurchaseProps {
  order: IOrder;
}

export const CardPurchase = ({ order }: ICardPurchaseProps): JSX.Element => {
  let showPaymetType = {
    Pending: "text-yellow-700",
    Authorized: "text-green-400",
    Cancelled: "text-red-400",
  };

  return (
    <div className="flex flex-col m-2 p-3 rounded bg-zinc-200 shadow">
      <div className="flex flex-col  pb-3">
        <div className="flex justify-between mb-3 border-b border-zinc-400">
          <p className="text-black">Data: {formatDate(order.createdAt)} </p>
          <p className="font-bold text-black text-xs">id: {order?.id}</p>
        </div>

        <p className="text-black">
          Estado do pagamento:{" "}
          <span className={`${showPaymetType[order.paymentStatus]}`}>
            {order.paymentStatus}
          </span>
        </p>

        <div className="border-b border-zinc-400 p-1 mb-1">
          <h3 className="font-inter text-lg">Endereço:</h3>

          <span>
            <p className="font-inter text-base text-black">
              {" "}
              <span className="text-pirates-red-strong">Nome: </span>
              {order.address.address},
              <span className="text-pirates-red-strong"> Número: </span>
              {order.address.number},
              <span className="text-pirates-red-strong"> Complemento: </span>
              {order.address.complement}
            </p>
            <p className="font-inter text-base text-black">
              <span className="text-pirates-red-strong">CEP: </span>
              {order.address.cep},
              <span className="text-pirates-red-strong"> Cidade: </span>
              {order.address.city},
              <span className="text-pirates-red-strong"> Estado: </span>
              {order.address.state},
              <span className="text-pirates-red-strong"> País: </span>
              {order.address.country}
            </p>
            <p className="font-inter text-base text-black"></p>
          </span>
        </div>

        <div className=" p-1 mb-1 font-inter text-base border-b border-zinc-400 ">
          <h3 className="font-inter text-lg">Cartão de crédito: </h3>
          <p className="text-black">
            <span className="text-pirates-red-strong">Número: </span>
            {order.creditCard?.number}
            <span className="text-pirates-red-strong"> Nome: </span>
            {order.creditCard?.name}
          </p>
        </div>

        <span className="text-black">
          Total: {formatReal(parseFloat(order?.total))}
        </span>
      </div>

      <ListPurchase key={order.id} products={order.orderProducts} />
    </div>
  );
};
