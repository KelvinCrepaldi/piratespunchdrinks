import { ICreditCard } from "@/interfaces/creditCards.interface";
import { Info } from "../Info";

interface ICreditCardCheckboxProps {
  creditCard: ICreditCard;
  selectedCreditCard: ICreditCard | false;
  handleSelectCard: (creditCard: ICreditCard) => void;
}

export const CreditCardCheckbox = ({
  creditCard,
  handleSelectCard,
  selectedCreditCard,
}: ICreditCardCheckboxProps): JSX.Element => {
  return (
    <label
      className={`flex bg-pirates-card-dark rounded p-3 mt-1 border-l cursor-pointer  ${
        selectedCreditCard && selectedCreditCard.id === creditCard.id
          ? "border-green-500"
          : "border-transparent hover:border-yellow-700"
      }`}
    >
      <input
        className="mr-4 accent-green-600"
        type="checkbox"
        onChange={() => handleSelectCard(creditCard)}
        checked={
          selectedCreditCard && selectedCreditCard.id === creditCard.id
            ? true
            : false
        }
      />
      <div>
        <div>
          <Info title="Nome:" content={creditCard.name}></Info>
          <Info title="Número:" content={creditCard.number}></Info>
          <Info title="Validade:" content={creditCard.expiration_date}></Info>
        </div>
      </div>
    </label>
  );
};
