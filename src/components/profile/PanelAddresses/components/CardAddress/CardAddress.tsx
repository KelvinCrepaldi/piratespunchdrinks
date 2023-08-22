import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddress } from "@/interfaces/address.interface";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteAddress } from "@/store/reducers/addressesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { InputText } from "@/components/_ui/InputText";
import { Input } from "@/components/_ui/Input";

interface ICardAddressProps {
  address: IAddress;
}

interface IAddressSchema {
  address: string;
  cep: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
}

export const CardAddress = ({ address }: ICardAddressProps): JSX.Element => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);

  const addressSchema = yup.object().shape({
    address: yup.string().required(),
    cep: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IAddressSchema>({
    defaultValues: {
      address: address.address,
      cep: address.cep,
      number: address.number,
      complement: address.complement,
      city: address.city,
      state: address.state,
      country: address.country,
    },
    resolver: yupResolver(addressSchema),
  });

  const handleDelete = (id: string) => {
    dispatch(deleteAddress(id));
  };

  const handleEdit = (): void => {
    setDisabled(false);
  };

  const handleCancelEdit = (): void => {
    setDisabled(true);
    clearErrors();
  };

  const handleUpdateCreditCard: SubmitHandler<IAddressSchema> = (data) => {
    const { address, cep, city, complement, country, number, state } = data;
    console.log({ address, cep, city, complement, country, number, state });
    setDisabled(true);
  };

  return (
    <form
      className="flex flex-col m-2 p-3 bg-neutral-900 rounded border border-zinc-700 shadow-pirates-card"
      onSubmit={handleSubmit(handleUpdateCreditCard)}
    >
      <div className="flex justify-between border-b border-zinc-700 text-sm mb-4">
        <span className="w-full font-bold">ID: {address.id}</span>

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
            onClick={() => handleDelete(address.id)}
            type="button"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      {/* Inputs ============================================ */}

      <div className="flex space-x-2">
        <div className="flex flex-wrap">
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
              {" "}
              <Input
                name="state"
                control={control}
                label="Estado:"
                error={errors.state?.message}
              />
            </div>
            <div className="w-1/4">
              {" "}
              <Input
                name="country"
                control={control}
                label="País:"
                error={errors.country?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
