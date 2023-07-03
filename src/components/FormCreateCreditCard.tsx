import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "@/store/actions/addresses";
import { useState } from "react";
import { createCreditCard } from "@/store/actions/creditCards";

const FormCreateCreditCard = ({ isOpen = false, setIsOpen }: any) => {
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const creditCardSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
    Expiration: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(creditCardSchema),
  });

  const handleCreateCreditCard = (e: any) => {
    const body = e;
    dispatch(createCreditCard({ token, body }));

    setIsOpen(!isOpen);
  };
  const handleIsOpen = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div>
      <h1 className="text-xl">New CreditCard:</h1>
      <form onSubmit={handleSubmit(handleCreateCreditCard)}>
        <input
          className="bg-transparent border border-pirates-silver rounded"
          placeholder="Name"
          {...register("name")}
        />
        <input placeholder="Number" {...register("number")} />
        <input placeholder="Expiration Date" {...register("expirationDate")} />
        <div className="flex justify-end">
          <button type="submit">Create</button>
          <button onClick={handleIsOpen}>Cancel</button>
        </div>
      </form>
    </div>
  ) : null;
};

export default FormCreateCreditCard;
