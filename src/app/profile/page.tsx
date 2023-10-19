"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IUser } from "@/interfaces/user.interface";
import { InputText } from "@/components/_ui/InputText";

export default function PanelUser(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = useSelector((state: any) => state.auth.user);
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
        <div className=""></div>
        <h4 className="border-b-2 font-inter border-pirates-red-strong text-pirates-red-strong">
          Meu perfil
        </h4>{" "}
        <InputText
          labelText="Nome de usuário:"
          defaultValue={user?.name}
          disabled
        ></InputText>
        <InputText
          labelText="E-mail:"
          defaultValue={user?.email}
          disabled
        ></InputText>
      </div>
    </div>
  );
}
