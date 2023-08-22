import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { createAddress } from "@/store/reducers/addressesReducer";
import { useAppDispatch } from "@/store/store";

import { Input } from "@/components/_ui/Input";

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
    number: string;
    complement: string;
    city: string;
    state: string;
    country: string;
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IAddresSchema>({
    defaultValues: {
      address: "",
      cep: "",
      number: "",
      complement: "",
      city: "",
      state: "",
      country: "",
    },
    resolver: yupResolver(addressSchema),
  });

  const handleCreateAddress: SubmitHandler<IAddresSchema> = (data) => {
    dispatch(createAddress({ data }));

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
          <Input
            name="address"
            control={control}
            label="Endereço:"
            error={errors.address?.message}
          />
          <div className="w-1/4">
            <Input
              name="number"
              control={control}
              label="Número:"
              error={errors.number?.message}
              type="number"
            />
          </div>
          <div className="w-1/4">
            <Input
              name="complement"
              control={control}
              label="Complemento:"
              error={errors.complement?.message}
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-1/3">
            <Input
              name="cep"
              control={control}
              label="CEP:"
              error={errors.cep?.message}
              mask="99999-999"
            />
          </div>
          <div className="">
            <Input
              name="city"
              control={control}
              label="Cidade:"
              error={errors.city?.message}
            />
          </div>
          <div className="w-1/12">
            <Input
              mask="aa"
              name="state"
              control={control}
              label="Estado:"
              error={errors.state?.message}
            />
          </div>
          <div className="w-1/4">
            <Input
              name="country"
              control={control}
              label="País:"
              error={errors.country?.message}
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
