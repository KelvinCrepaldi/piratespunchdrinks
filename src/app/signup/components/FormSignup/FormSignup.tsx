import { useForm } from "react-hook-form";
import { ActionBtn } from "@/components/_ui/ActionBtn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "@/store/reducers/userReducer";
import { RootState } from "@/store/store";
import { LoadingSpinner } from "@/components/_ui/LoadingSpinner";
import { InputText } from "../../../../components/_ui/InputText";
import { CardHighlightProduct } from "@/components/_ui/CardProduct";

const FormSignup = () => {
  const dispatch = useDispatch();
  const { signupStatus } = useSelector((state: RootState) => state.auth);

  const formSchema = yup.object().shape({
    name: yup.string().required("Escreva um nome."),
    email: yup
      .string()
      .required("Escreva seu email.")
      .email("Formato de e-mail inválido."),
    password: yup
      .string()
      .required("Escreva uma senha.")
      .min(6, "Senha precisa ter no minimo 6 caracteres."),
    confirmPassword: yup.string().required("Confirme a senha."),
  });

  interface ISignupForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<ISignupForm>({ resolver: yupResolver(formSchema) });

  const handleSignup = (e: any) => {
    const { name, email, password } = e;
    dispatch(createAccount({ name, email, password }));
  };

  return (
    <form
      className="flex flex-col items-center m-auto max-w-[350px] w-full"
      onSubmit={handleSubmit(handleSignup)}
    >
      <h1>Criar nova conta</h1>
      <InputText
        labelText="Nome"
        error={errors.name?.message}
        {...register("name")}
      ></InputText>

      <InputText
        labelText="Email"
        error={errors.email?.message}
        {...register("email")}
      ></InputText>

      <InputText
        type="password"
        labelText="Senha"
        error={errors.password?.message}
        {...register("password")}
      ></InputText>

      <InputText
        type="password"
        labelText="Confirmar senha"
        error={errors.password?.message}
        {...register("confirmPassword")}
      ></InputText>
      <div className="mt-5">
        {signupStatus.loading ? (
          <LoadingSpinner />
        ) : (
          <ActionBtn type="submit">Criar conta</ActionBtn>
        )}
      </div>
    </form>
  );
};

export default FormSignup;
