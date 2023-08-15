import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  deleteCreditCard,
  fetchCreditCards,
} from "@/store/reducers/creditCardsReducer";
import { FormCreateCreditCard } from "../FormCreateCreditCard";
import { useAppDispatch } from "@/store/store";

export const PanelCreditCards = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: any) => state.auth.token);
  const creditCards = useSelector(
    (state: any) => state.creditCards.creditCards
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchCreditCards());
    }
  }, [dispatch, token]);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCreditCard({ id }));
  };

  return (
    <div>
      <div className="border-b-2 font-inter border-pirates-red  flex justify-between">
        <h1 className="font-inter">Cartões de crédito</h1>
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
            + Adicionar novo cartão
          </button>
        )}
      </div>
      <FormCreateCreditCard isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        {creditCards.map((creditCard: any) => (
          <div
            key={creditCard.id}
            className="flex flex-col m-2 p-3 bg-neutral-900 rounded"
          >
            <div className="flex justify-between border-b text-sm mb-4">
              <span>id: {creditCard.id}</span>
              <button
                className="text-red-300"
                onClick={() => handleDelete(creditCard.id)}
              >
                delete
              </button>
            </div>
            <div>
              <span className="text-pirates-gold">Name: </span>
              <span>{creditCard.name}</span>
            </div>
            <div className="flex space-x-5">
              <span>
                <span className="text-pirates-gold">Number: </span>{" "}
                {creditCard.number}
              </span>
              <span>
                <span className="text-pirates-gold">Expiration: </span>{" "}
                {creditCard.expiration_date}
              </span>
            </div>
          </div>
        ))}
      </div>
      {creditCards.length == 0 ? (
        <div className="my-3">
          <span>
            Nenhum cartão cadastrado.{" "}
            <button className="text-green-200" onClick={handleOpenForm}>
              Adicione
            </button>{" "}
            um novo cartão!
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
