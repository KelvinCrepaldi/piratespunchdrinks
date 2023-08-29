import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/store/store";
import { createCreditCards } from "@/store/reducers/creditCardsReducer";
import { InputText } from "../../../../_ui/InputText";
import { Input } from "@/components/_ui/Input/Input";

interface IFormCreateCreditCardProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const FormCreateCreditCard = ({
  isOpen = false,
  setIsOpen,
}: IFormCreateCreditCardProps) => {
  const dispatch = useAppDispatch();

  const creditCardSchema = yup.object().shape({
    name: yup.string().required("Escreva o nome do cartão."),
    number: yup
      .number()
      .required("Escreva o número.")
      .test("len", "Precisa conter 16 números.", (val) => {
        return val.toString().length === 16;
      }),
    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Escreva uma data valida (Mês/Ano).")
      .required("Escreva a data de validade.")
      .test("len", "Escreva uma data valida (Mês/Ano).", (val: any) => {
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
    control,
    formState: { errors },
    reset,
  } = useForm<CreditCardSchema>({
    defaultValues: {
      name: "",
      number: parseInt(""),
      expirationDate: "",
    },
    resolver: yupResolver(creditCardSchema),
  });

  const handleCreateCreditCard: SubmitHandler<CreditCardSchema> = (data) => {
    const { name, number, expirationDate } = data;
    dispatch(createCreditCards({ name, number, expirationDate }));
    setIsOpen();
    reset();
  };

  const handleIsOpen = () => {
    reset();
    setIsOpen();
  };

  return isOpen ? (
    <div className="border-b-2 p-2 m-1">
      <p className="text-xl">Novo cartão de crédito:</p>
      <form className="" onSubmit={handleSubmit(handleCreateCreditCard)}>
        <div>
          <Input
            control={control}
            label="Nome:"
            error={errors.name?.message}
            name="name"
          />
        </div>
        <div className="flex space-x-2">
          <Input
            mask="9999 9999 9999 9999"
            control={control}
            label="Numero:"
            error={errors.number?.message}
            name="number"
          />
          <Input
            control={control}
            error={errors.expirationDate?.message}
            label="Data de validade"
            mask="99/99"
            name="expirationDate"
          />
        </div>

        <div className="flex justify-end w-full mt-2">
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-green-400"
            type="submit"
          >
            Create
          </button>
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-red-400"
            type="button"
            onClick={handleIsOpen}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : null;
};
