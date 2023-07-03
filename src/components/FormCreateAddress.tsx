import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "@/store/actions/addresses";
import { useState } from "react";

const FormCreateAddress = ({ isOpen = false, setIsOpen }: any) => {
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

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
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const handleCreateAddress = (e: any) => {
    const body = e;
    dispatch(createAddress({ token, body }));

    setIsOpen(!isOpen);
  };
  const handleIsOpen = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div>
      <h1 className="text-xl">New Address:</h1>
      <form onSubmit={handleSubmit(handleCreateAddress)}>
        <input
          className="bg-transparent border border-pirates-silver rounded"
          placeholder="Address"
          {...register("address")}
        />
        <input placeholder="Cep" {...register("cep")} />
        <input placeholder="Number" {...register("number")} />
        <input placeholder="Complement" {...register("complement")} />
        <input placeholder="City" {...register("city")} />
        <input placeholder="State" {...register("state")} />
        <input placeholder="Country" {...register("country")} />
        <div className="flex justify-end">
          <button type="submit">Create</button>{" "}
          <button onClick={handleIsOpen}>Cancel</button>
        </div>
      </form>
    </div>
  ) : null;
};

export default FormCreateAddress;
