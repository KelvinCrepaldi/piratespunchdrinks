import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { authenticate } from "@/store/actions/user";
import { useAppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ActionBtn from "./ActionBtn";

const FormLogin = () => {
  const dispatch = useAppDispatch();
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
    dispatch(authenticate(e));
    reset();
  };

  return (
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

      <ActionBtn type="submit" colorStyle="secondary">
        Login
      </ActionBtn>
    </form>
  );
};

export default FormLogin;
