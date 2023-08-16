import { ICreditCard } from "@/interfaces/creditCards.interface";
import { deleteCreditCard } from "@/store/reducers/creditCardsReducer";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { InputText } from "@/components/_ui/InputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface ICardCreditCard {
  card: ICreditCard;
}
export const CardCreditCard = ({ card }: ICardCreditCard): JSX.Element => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const creditCardSchema = yup.object().shape({
    name: yup.string().required().default(card.name),
    number: yup
      .number()
      .required()
      .test("len", "Must be exactly 16 numbers", (val) => {
        return val.toString().length === 16;
      })
      .default(parseInt(card.number)),
    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format (MM/YY)")
      .required("Expiration date is required")
      .test("len", "Date shape incorrect. (MM/YY)", (val: any) => {
        return val.length === 5;
      })
      .default(card.expiration_date),
  });

  interface ICreditCardSchema {
    name: string;
    number: number;
    expirationDate: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<ICreditCardSchema>({
    resolver: yupResolver(creditCardSchema),
  });

  const handleDelete = (id: string) => {
    dispatch(deleteCreditCard({ id }));
  };

  const handleEdit = (): void => {
    setDisabled(false);
  };

  const handleCancelEdit = (): void => {
    setDisabled(true);
    clearErrors();
  };

  const handleUpdateCreditCard = (e: any) => {
    const { name, number, expirationDate } = e;

    setDisabled(true);
  };

  return (
    <form
      key={card.id}
      className="flex flex-col m-2 p-3 bg-neutral-900 rounded border border-zinc-700"
      onSubmit={handleSubmit(handleUpdateCreditCard)}
    >
      <div className="flex justify-between border-b border-zinc-700 text-sm mb-4">
        <span className="w-full font-bold">ID: {card.reference}</span>

        <div className={`flex ${disabled && "hidden"}`}>
          <button className={`hover:text-green-300 mx-4 text-lg`} type="submit">
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            className="hover:text-red-300 text-lg"
            type="reset"
            onClick={handleCancelEdit}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className={`flex ${!disabled && "hidden"}`}>
          <button
            className="hover:text-yellow-300 mx-4 text-lg"
            onClick={handleEdit}
            type="button"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            className="hover:text-red-300 text-lg"
            onClick={() => handleDelete(card.id)}
            type="button"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      {/* Inputs ============================================ */}

      <div>
        <InputText
          labelText="Nome:"
          defaultValue={card.name}
          disabled={disabled}
          {...register("name")}
          error={errors.name?.message}
        ></InputText>
      </div>
      <div className="flex space-x-2">
        <InputText
          labelText="Numero:"
          defaultValue={card.number}
          disabled={disabled}
          {...register("number")}
          error={errors.number?.message}
        ></InputText>
        <InputText
          labelText="Expiração:"
          defaultValue={card.expiration_date}
          disabled={disabled}
          {...register("expirationDate")}
          error={errors.expirationDate?.message}
        ></InputText>
      </div>
    </form>
  );
};
