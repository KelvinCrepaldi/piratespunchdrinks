import { IAuthenticate } from "@/interfaces/authenticate.interface";
import { authenticate } from "@/store/reducers/userReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ActionBtn } from "@/components/_ui/ActionBtn";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";
import { InputText } from "../../../../components/_ui/InputText";

export const FormLogin = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { loginStatus } = useSelector((state: RootState) => state.auth);

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

  const handleLogin = (form: IAuthenticate): void => {
    dispatch(authenticate(form));
    reset();
  };

  return (
    <form
      className="flex flex-col items-center m-auto max-w-[350px] w-full"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h4>Fazer login</h4>
      <InputText
        labelText="Email"
        error={errors.email?.message}
        {...register("email")}
      ></InputText>

      <InputText
        error={errors.password?.message}
        labelText="Password"
        type="password"
        {...register("password")}
      ></InputText>
      <div className="mt-5">
        {loginStatus.loading ? (
          <LoadingSpinner />
        ) : (
          <ActionBtn type="submit" colorStyle="secondary">
            Login
          </ActionBtn>
        )}
      </div>
    </form>
  );
};
