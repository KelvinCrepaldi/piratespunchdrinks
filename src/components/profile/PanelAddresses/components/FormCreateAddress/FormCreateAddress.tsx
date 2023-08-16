import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createAddress } from "@/store/reducers/addressesReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { InputText } from "../../../../_ui/InputText";

interface IFormCreateAddressProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const FormCreateAddress = ({
  isOpen = false,
  setIsOpen,
}: IFormCreateAddressProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const addressSchema = yup.object().shape({
    address: yup.string().required(),
    cep: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
  });

  interface IAddresSchema {
    address: string;
    cep: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    country: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddresSchema>({
    resolver: yupResolver(addressSchema),
  });

  const handleCreateAddress = (e: any) => {
    const body = e;
    dispatch(createAddress(body));

    setIsOpen(!isOpen);
  };
  const handleIsOpen = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="border-b-2 p-2 m-1">
      <p className="text-xl">Novo endereço:</p>
      <form
        className="flex flex-wrap "
        onSubmit={handleSubmit(handleCreateAddress)}
      >
        <div className="flex space-x-2">
          <InputText
            labelText="Endereço:"
            error={errors.address?.message}
            {...register("address")}
          />
          <div className="w-1/4">
            <InputText
              labelText="Número:"
              error={errors.number?.message}
              type="number"
              {...register("number")}
            />
          </div>
          <div className="w-1/4">
            <InputText
              labelText="Complemento:"
              error={errors.complement?.message}
              {...register("complement")}
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-1/3">
            <InputText
              labelText="CEP:"
              error={errors.cep?.message}
              type="number"
              {...register("cep")}
            />
          </div>
          <div className="">
            <InputText
              labelText="Cidade:"
              error={errors.city?.message}
              {...register("city")}
            />
          </div>
          <div className="w-1/12">
            {" "}
            <InputText
              labelText="Estado:"
              error={errors.state?.message}
              {...register("state")}
            />
          </div>
          <div className="w-1/4">
            {" "}
            <InputText
              labelText="País:"
              error={errors.country?.message}
              {...register("country")}
            />
          </div>
        </div>

        <div className="flex justify-end w-full mt-2">
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-green-400"
            type="submit"
          >
            Create
          </button>{" "}
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
  ) : (
    <></>
  );
};
