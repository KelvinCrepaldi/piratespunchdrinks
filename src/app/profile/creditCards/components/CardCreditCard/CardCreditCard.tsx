import { ICreditCard } from "@/interfaces/creditCards.interface";
import {
  deleteCreditCard,
  updateCreditCards,
} from "@/store/reducers/creditCardsReducer";
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
import { useRouter } from "next/navigation";

interface ICardCreditCardProps {
  card: ICreditCard;
}

export const CardCreditCard = ({ card }: ICardCreditCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [disabled, setDisabled] = useState<boolean>(true);

  const creditCardSchema = yup.object().shape({
    name: yup.string().required().min(3, "Minimo 3 letras."),
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

  interface ICreditCardSchema {
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
  } = useForm<ICreditCardSchema>({
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

  const handleUpdateCreditCard: SubmitHandler<ICreditCardSchema> = (data) => {
    const { name, number, expirationDate } = data;

    console.log(data);

    const creditCardParams = {
      name,
      number: number.toString(),
      expiration_date: expirationDate,
    };

    console.log(creditCardParams);

    dispatch(
      updateCreditCards({
        creditCardId: card.id,
        creditCardParams,
      })
    );

    setDisabled(true);
  };

  return (
    <form
      className="flex flex-col m-2 p-3 rounded bg-zinc-200 shadow"
      onSubmit={handleSubmit(handleUpdateCreditCard)}
    >
      <div className="flex justify-end text-sm text-blue-800">
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
