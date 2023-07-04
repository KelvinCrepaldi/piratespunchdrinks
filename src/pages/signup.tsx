import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ActionBtn from "@/components/ActionBtn";

import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "@/store/actions/user";

export default function Signup() {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.user);

  // user -> name, email, password

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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleLogin = (e: any) => {
    const { email, password } = e;
    // criar logica de criação de conta
  };

  return (
    <>
      <div className="w-100 md:max-w-5xl m-auto p-5 md:p-16 flex flex-col items-center">
        <div>{auth?.email}</div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col space-y-1 items-center mb-5">
            <h1>Criar nova conta</h1>
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
            {errors.email?.message && (
              <span className="">{String(errors.email?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              type="password"
              placeholder="Password"
              {...register("password")}
            ></input>
            {errors.password?.message && (
              <span className="">{String(errors.password?.message)}</span>
            )}

            <input
              className="bg-transparent text-red-500 border w-60 p-1"
              type="password"
              placeholder="Confirm Password"
              {...register("password")}
            ></input>
            {errors.confirmPassword?.message && (
              <span className="">
                {String(errors.confirmPassword?.message)}
              </span>
            )}
          </div>
          <ActionBtn type="submit">Criar conta</ActionBtn>
        </form>

        <Link className="text-center mt-5" href={"/login"}>
          <p>já possui uma conta?</p>
        </Link>
      </div>
    </>
  );
}
