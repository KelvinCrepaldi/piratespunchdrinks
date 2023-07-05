import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { authenticate } from "@/store/actions/user";
import ActionBtn from "@/components/ActionBtn";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/user");
    }
  }, [isAuthenticated, router]);

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
    reset,
  } = useForm<IAuthenticate>({ resolver: yupResolver(formSchema) });

  const handleLogin = (e: IAuthenticate): void => {
    const { email, password } = e;
    dispatch(authenticate({ email, password }));
    reset();
  };

  return (
    <>
      <div className="w-100 md:max-w-5xl m-auto p-5 md:p-16">
        <form
          className="flex flex-col space-y-4 items-center"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            className="bg-transparent text-yellow-500 border w-60 p-1"
            placeholder="Email"
            {...register("email")}
          ></input>
          {errors.email?.message && (
            <span className="text-red-400">{errors.email?.message}</span>
          )}
          <input
            className="bg-transparent text-yellow-500 border w-60 p-1"
            type="password"
            placeholder="Senha"
            {...register("password")}
          ></input>
          {errors.password?.message && (
            <span className="text-red-400">{errors.password?.message}</span>
          )}
          <Link className="text-center" href={"/signup"}>
            <p>Criar uma conta?</p>
          </Link>
          <ActionBtn type="submit" colorStyle="secondary">
            Login
          </ActionBtn>
        </form>
      </div>
    </>
  );
}
