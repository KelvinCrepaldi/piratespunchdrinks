import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddress } from "@/interfaces/address.interface";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  deleteAddress,
  updateAddress,
} from "@/store/reducers/addressesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { InputText } from "@/components/_ui/InputText";
import { Input } from "@/components/_ui/Input";
import { RootState } from "@/store/store";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";

interface ICardAddressProps {
  address: IAddress;
}

export const CardAddress = ({ address }: ICardAddressProps): JSX.Element => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const { addresID, error, loading } = useSelector(
    (state: RootState) => state.addresses.updateAddress
  );

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

  const handleEdit = (e: any): void => {
    setDisabled(false);
  };

  const handleCancelEdit = (): void => {
    setDisabled(true);
    clearErrors();
    reset();
  };

  interface IAddressSchema {
    address: string;
    cep: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    country: string;
  }

  const handleUpdateAddress: SubmitHandler<IAddressSchema> = (data) => {
    dispatch(
      updateAddress({
        addressParams: data,
        addressId: address.id,
      })
    );
    setDisabled(true);
  };

  return (
    <form
      className="flex flex-col m-2 p-3 rounded bg-zinc-200 shadow"
      onSubmit={handleSubmit(handleUpdateAddress)}
    >
      <div className="flex justify-end text-sm text-blue-800">
        {addresID === address.id && loading && <LoadingSpinner />}
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
              disabled={disabled}
            />
            <div className="w-1/4">
              <Input
                name="number"
                control={control}
                label="Número:"
                error={errors.number?.message}
                type="number"
                disabled={disabled}
              />
            </div>
            <div className="w-1/4">
              <Input
                name="complement"
                control={control}
                label="Complemento:"
                error={errors.complement?.message}
                disabled={disabled}
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
                disabled={disabled}
              />
            </div>
            <div className="">
              <Input
                name="city"
                control={control}
                label="Cidade:"
                error={errors.city?.message}
                disabled={disabled}
              />
            </div>
            <div className="w-1/12">
              {" "}
              <Input
                name="state"
                control={control}
                label="Estado:"
                error={errors.state?.message}
                disabled={disabled}
              />
            </div>
            <div className="w-1/4">
              {" "}
              <Input
                name="country"
                control={control}
                label="País:"
                error={errors.country?.message}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
