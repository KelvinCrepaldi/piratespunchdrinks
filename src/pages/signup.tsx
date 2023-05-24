import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "@/store/actions";

export default function Signup() {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.user);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Por favor escreva seu email.")
      .email("Formato de e-mail inválido."),
    password: yup
      .string()
      .required("Por favor escreva uma senha.")
      .min(6, "Senha precisa ter no minimo 6 caracteres."),
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
      <div className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
        <div>{auth?.email}</div>
        <form
          className="flex flex-col space-y-4 items-center"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            className="bg-transparent text-red-500 border w-60 p-1"
            placeholder="Email"
            {...register("email")}
          ></input>
          {errors.email?.message && <span className="error-message">{}</span>}

          <input
            className="bg-transparent text-red-500 border w-60 p-1"
            type="password"
            placeholder="Senha"
            {...register("password")}
          ></input>
          {errors.password?.message && (
            <span className="error-message">{}</span>
          )}

          <button type="submit">Login</button>
        </form>
        <Link className="text-center" href={"/login"}>
          <p>já possui uma conta?</p>
        </Link>
      </div>
    </>
  );
}
