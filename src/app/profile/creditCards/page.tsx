"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardCreditCard } from "./components/CardCreditCard";
import { fetchCreditCards } from "@/store/reducers/creditCardsReducer";
import { FormCreateCreditCard } from "./components/FormCreateCreditCard";
import { RootState, useAppDispatch } from "@/store/store";
import { ICreditCard } from "@/interfaces/creditCards.interface";

export default function CreditCards(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: any) => state.auth.token);
  const creditCards = useSelector(
    (state: RootState) => state.creditCards.creditCards
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchCreditCards());
    }
  }, [dispatch, token]);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleSetIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="border-b-2 font-inter border-pirates-red-strong  flex justify-between">
        <h4 className="text-pirates-red-strong">Meus cartões de crédito</h4>
        {!isOpen && (
          <button
            className="text-green-800 rounded py-1 px-4 hover:text-green-600"
            onClick={handleOpenForm}
          >
            + Adicionar novo cartão
          </button>
        )}
      </div>
      <FormCreateCreditCard isOpen={isOpen} setIsOpen={handleSetIsOpen} />

      {creditCards &&
        creditCards.map((creditCard: ICreditCard) => (
          <CardCreditCard
            key={creditCard.reference}
            card={creditCard}
          ></CardCreditCard>
        ))}

      {creditCards && creditCards.length == 0 ? (
        <div className="my-3">
          <span className="text-black">
            Nenhum cartão cadastrado.{" "}
            <button className="text-green-800" onClick={handleOpenForm}>
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
}
