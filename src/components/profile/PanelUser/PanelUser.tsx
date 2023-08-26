import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InputText } from "../../_ui/InputText";
import { IUser } from "@/interfaces/user.interface";

export function PanelUser(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );

  useEffect(() => {
    setUser(getUser);
  }, [getUser, getAdressList, getcreditCardsList]);

  return (
    <div className="font-inter ">
      <div className="">
        <h1 className="border-b-2 font-inter border-pirates-red">Meu perfil</h1>{" "}
        <InputText
          labelText="Nome de usuário:"
          defaultValue={user?.name}
        ></InputText>
        <InputText labelText="E-mail:" defaultValue={user?.email}></InputText>
        <InputText
          labelText="Nome completo:"
          defaultValue={user?.name}
        ></InputText>
        <InputText labelText="Aniversário:"></InputText>
        <InputText labelText="CPF"></InputText>
        <InputText labelText="Contato:"></InputText>
        <InputText
          labelText="Data da criação da conta:"
          defaultValue={user?.createdAt.toString()}
        ></InputText>
      </div>
    </div>
  );
}
