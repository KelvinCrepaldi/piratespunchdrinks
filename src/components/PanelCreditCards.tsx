import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCreditCard,
  fetchCreditCards,
} from "@/store/actions/creditCards";
import FormCreateCreditCard from "./FormCreateCreditCard";

const PanelCreditCards = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [creditCardsList, setCreditCardsList] = useState([]);

  const token = useSelector((state: any) => state.auth.token);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );

  useEffect(() => {
    setCreditCardsList(getcreditCardsList);
  }, [getcreditCardsList]);

  useEffect(() => {
    dispatch(fetchCreditCards(token));
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
        {creditCardsList.map((creditCard: any) => (
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
