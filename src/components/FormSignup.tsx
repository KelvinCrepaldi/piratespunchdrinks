import { useForm } from "react-hook-form";
import ActionBtn from "./ActionBtn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createAccount } from "@/store/reducers/userReducer";

const FormSignup = () => {
  const dispatch = useDispatch();

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

  const handleSignup = (e: any) => {
    const { name, email, password } = e;
    dispatch(createAccount({ name, email, password }));
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(handleSignup)}
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
          {...register("confirmPassword")}
        ></input>
        {errors.confirmPassword?.message && (
          <span className="">{String(errors.confirmPassword?.message)}</span>
        )}
      </div>
      <ActionBtn type="submit">Criar conta</ActionBtn>
    </form>
  );
};

export default FormSignup;
