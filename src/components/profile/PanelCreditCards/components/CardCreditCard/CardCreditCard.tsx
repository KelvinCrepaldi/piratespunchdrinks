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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/_ui/Input";

interface ICardCreditCard {
  card: ICreditCard;
}
export const CardCreditCard = ({ card }: ICardCreditCard): JSX.Element => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);

  const creditCardSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup
      .number()
      .required()
      .test("len", "Must be exactly 16 numbers", (val) => {
        return val.toString().length === 16;
      }),

    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Escreva uma data valida (Mês/Ano)")
      .required("Escreva a data de validade.")
      .test("len", "Escreva uma data valida (Mês/Ano)", (val: any) => {
        return val.length === 5;
      }),
  });

  interface CreditCardSchema {
    name: string;
    number: number;
    expirationDate: string;
  }

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    clearErrors,
  } = useForm<CreditCardSchema>({
    defaultValues: {
      name: card.name,
      number: parseInt(card.number),
      expirationDate: card.expiration_date,
    },
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
    reset();
  };

  const handleUpdateCreditCard: SubmitHandler<CreditCardSchema> = (data) => {
    const { name, number, expirationDate } = data;
    console.log(data);

    setDisabled(true);
  };

  return (
    <form
      key={card.id}
      className="flex flex-col m-2 p-3 bg-neutral-900 rounded border border-zinc-700 shadow-pirates-card"
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
        <Input
          control={control}
          label="Nome:"
          error={errors.name?.message}
          name="name"
          disabled={disabled}
        />
      </div>
      <div className="flex space-x-2">
        <Input
          mask="9999 9999 9999 9999"
          control={control}
          label="Numero:"
          error={errors.number?.message}
          name="number"
          disabled={disabled}
        />
        <Input
          control={control}
          error={errors.expirationDate?.message}
          label="Data de validade"
          mask="99/99"
          name="expirationDate"
          disabled={disabled}
        />
      </div>
    </form>
  );
};
