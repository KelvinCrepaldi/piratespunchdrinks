import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createAddress } from "@/store/reducers/addressesReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { InputText } from "../../_ui/InputText";

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
      <p className="text-xl">New address</p>
      <form
        className="flex flex-wrap "
        onSubmit={handleSubmit(handleCreateAddress)}
      >
        <InputText
          labelText="Address:"
          error={errors.address?.message}
          {...register("address")}
        />
        <InputText
          labelText="Number:"
          error={errors.number?.message}
          type="number"
          {...register("number")}
        />
        <InputText
          labelText="Complement:"
          error={errors.complement?.message}
          {...register("complement")}
        />{" "}
        <InputText
          labelText="CEP:"
          error={errors.cep?.message}
          type="number"
          {...register("cep")}
        />
        <InputText
          labelText="City:"
          error={errors.city?.message}
          {...register("city")}
        />
        <InputText
          labelText="State:"
          error={errors.state?.message}
          {...register("state")}
        />
        <InputText
          labelText="Country:"
          error={errors.country?.message}
          {...register("country")}
        />
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
