import { ListPurchase } from "../ListPurchase";
import { IOrder } from "@/interfaces/order.interface";
import formatReal from "@/utils/formatReal";

interface ICardPurchaseProps {
  order: IOrder;
}

export const CardPurchase = ({ order }: ICardPurchaseProps): JSX.Element => {
  console.log(order);
  let showPaymetType = {
    Pending: "text-yellow-700",
    Authorized: "text-green-400",
    Cancelled: "text-red-400",
  };

  return (
    <div className="flex flex-col m-2 p-3 bg-neutral-900 rounded border border-zinc-700 shadow-pirates-card">
      <div className="flex flex-col  pb-3">
        <div className="flex justify-between mb-3 border-b border-zinc-700">
          <span className="">Data: {order.createdAt.toString()}</span>
          <span className="font-bold">id: {order?.id}</span>
        </div>

        <span>
          Estado do pagamento:{" "}
          <span className={`${showPaymetType[order.paymentStatus]}`}>
            {order.paymentStatus}
          </span>
        </span>
        <div className="border-b border-pirates-black p-1 mb-1">
          <h3 className="font-inter text-lg">Endereço:</h3>

          <span>
            <p className="font-inter text-base">
              {" "}
              <span className="text-pirates-gold">Nome: </span>
              {order.address.address},
              <span className="text-pirates-gold"> Número: </span>
              {order.address.number},
              <span className="text-pirates-gold"> Complemento: </span>
              {order.address.complement}
            </p>
            <p className="font-inter text-base">
              <span className="text-pirates-gold">CEP: </span>
              {order.address.cep},
              <span className="text-pirates-gold"> Cidade: </span>
              {order.address.city},
              <span className="text-pirates-gold"> Estado: </span>
              {order.address.state},
              <span className="text-pirates-gold"> País: </span>
              {order.address.country}
            </p>
            <p className="font-inter text-base"></p>
          </span>
        </div>

        <div className=" p-1 mb-1 font-inter text-base border-b border-pirates-black ">
          <h3 className="font-inter text-lg">Cartão de crédito: </h3>
          <span className="text-pirates-gold">Número: </span>
          {order.creditCard?.number}
          <span className="text-pirates-gold"> Nome: </span>
          {order.creditCard?.name}
        </div>

        <span>Total: {formatReal(parseFloat(order?.total))}</span>
      </div>

      <ListPurchase key={order.id} products={order.orderProducts} />
    </div>
  );
};
