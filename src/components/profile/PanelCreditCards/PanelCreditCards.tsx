import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CardCreditCard } from "./components/CardCreditCard";
import {
  deleteCreditCard,
  fetchCreditCards,
} from "@/store/reducers/creditCardsReducer";
import { FormCreateCreditCard } from "./components/FormCreateCreditCard";
import { useAppDispatch } from "@/store/store";
import { ICreditCard } from "@/interfaces/creditCards.interface";

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

      {creditCards.map((creditCard: ICreditCard) => (
        <CardCreditCard
          key={creditCard.reference}
          card={creditCard}
        ></CardCreditCard>
      ))}

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
