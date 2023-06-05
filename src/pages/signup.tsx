import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ActionBtn from "@/components/ActionBtn";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "@/store/actions";

export default function Signup() {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.user);

  // user -> name, email, password
  // address -> address, cep, number, complement, city, state, country
  // creditCard -> number, validationData;

  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .required("Por favor escreva seu email.")
      .email("Formato de e-mail inválido."),
    password: yup
      .string()
      .required("Por favor escreva uma senha.")
      .min(6, "Senha precisa ter no minimo 6 caracteres."),
    confirmPassword: yup.string().required(),

    address: yup.string().required(),
    cep: yup.string().required(),
    addressNumber: yup.string().required(),
    complement: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),

    cardNumber: yup.string().required(),
    cardValidationData: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleLogin = (e: any) => {
    const { email, password } = e;
    dispatch(authenticate({ email, password }));
  };

  return (
    <>
      <div className="w-100 md:max-w-5xl m-auto p-5 md:p-16 flex flex-col items-center">
        <div>{auth?.email}</div>
        <form
          className="flex space-x-4 items-start"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col space-y-4 items-center">
            <h1>User</h1>
            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Name"
              {...register("name")}
            ></input>
            {errors.name?.message && (
              <span className="">{String(errors.name?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Email"
              {...register("email")}
            ></input>
            {errors.email?.message && <span className="">{}</span>}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              type="password"
              placeholder="Password"
              {...register("password")}
            ></input>
            {errors.password?.message && <span className="">{}</span>}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              type="password"
              placeholder="Confirm Password"
              {...register("password")}
            ></input>
            {errors.password?.message && (
              <span className="">{String(errors.password?.message)}</span>
            )}
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h1>Address</h1>
            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Address"
              {...register("address")}
            ></input>
            {errors.address?.message && <span className="">{}</span>}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Address Number"
              {...register("addressNumber")}
            ></input>
            {errors.addressNumber?.message && <span className="">{}</span>}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Complement"
              {...register("complement")}
            ></input>
            {errors.complement?.message && (
              <span className="">{String(errors.complement?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Cep"
              {...register("cep")}
            ></input>
            {errors.email?.message && <span className="">{}</span>}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="City"
              {...register("city")}
            ></input>
            {errors.city?.message && (
              <span className="">{String(errors.city?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="State"
              {...register("state")}
            ></input>
            {errors.state?.message && (
              <span className="">{String(errors.state?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Country"
              {...register("country")}
            ></input>
            {errors.country?.message && (
              <span className="">{String(errors.country?.message)}</span>
            )}
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h1>Credit card</h1>
            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Card Number"
              {...register("cardNumber")}
            ></input>
            {errors.cardNumber?.message && (
              <span className="">{String(errors.cardNumber?.message)}</span>
            )}
            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              placeholder="Validation Date"
              {...register("cardValidationData")}
            ></input>
            {errors.cardValidationData?.message && (
              <span className="">
                {String(errors.cardValidationData?.message)}
              </span>
            )}
          </div>
          <div>
            <ActionBtn type="submit">Create Account</ActionBtn>
          </div>
        </form>

        <Link className="text-center" href={"/login"}>
          <p>já possui uma conta?</p>
        </Link>
      </div>
    </>
  );
}
