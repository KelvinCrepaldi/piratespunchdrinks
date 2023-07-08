import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteCreditCard,
  fetchCreditCards,
} from "@/store/actions/creditCards";
import FormCreateCreditCard from "./FormCreateCreditCard";
import { useAppDispatch } from "@/store/store";

const PanelCreditCards = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: any) => state.auth.token);
  const creditCards = useSelector(
    (state: any) => state.creditCards.creditCards
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchCreditCards(token));
    }
  }, [dispatch, token]);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCreditCard({ token, id }));
  };

  return (
    <div>
      <div className="border-b font-inter flex justify-between">
        <h1>Credit Cards</h1>
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
            + Add new credit card
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
    </div>
  );
};

export default PanelCreditCards;
