import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
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
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IAddressSchema>({
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

  const handleUpdateCreditCard = (e: IAddressSchema) => {
    const { address, cep, city, complement, country, number, state } = e;
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
        <InputText
          labelText="Endereço:"
          defaultValue={address.address}
          disabled={disabled}
          {...register("address")}
          error={errors.address?.message}
        ></InputText>
        <div className="w-1/4">
          <InputText
            labelText="Número:"
            defaultValue={address.number}
            disabled={disabled}
            {...register("number")}
            error={errors.number?.message}
            type="number"
          ></InputText>
        </div>
        <div className="w-1/4">
          <InputText
            labelText="Complemento:"
            defaultValue={address.complement}
            disabled={disabled}
            {...register("complement")}
            error={errors.complement?.message}
            type="string"
          ></InputText>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="w-1/3">
          <InputText
            labelText="CEP:"
            defaultValue={address.cep}
            disabled={disabled}
            {...register("cep")}
            error={errors.cep?.message}
            type="string"
          ></InputText>
        </div>
        <div className="">
          <InputText
            labelText="Cidade:"
            defaultValue={address.city}
            disabled={disabled}
            {...register("city")}
            error={errors.city?.message}
            type="string"
          ></InputText>
        </div>
        <div className="w-1/12">
          <InputText
            labelText="Estado:"
            defaultValue={address.state}
            disabled={disabled}
            {...register("state")}
            error={errors.state?.message}
            type="string"
          ></InputText>
        </div>
        <div className="w-1/4">
          <InputText
            labelText="País:"
            defaultValue={address.country}
            disabled={disabled}
            {...register("country")}
            error={errors.country?.message}
            type="string"
          ></InputText>
        </div>
      </div>
    </form>
  );
};
