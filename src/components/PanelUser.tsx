import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputText from "./InputText";
import { IUser } from "@/interfaces/user.interface";

export default function PanelUser() {
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
        <h1 className="border-b-2 font-inter border-pirates-red">User</h1>
        <InputText labelText="Name:" defaultValue={user?.name}></InputText>
        <InputText labelText="Email:" defaultValue={user?.email}></InputText>
        <InputText
          labelText="Creation date of account:"
          defaultValue={user?.createdAt.toString()}
        ></InputText>
      </div>
    </div>
  );
}
