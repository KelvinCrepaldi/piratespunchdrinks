import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputText from "./InputText";

export default function PanelUser() {
  const [user, setUser] = useState<any>(null);

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
        <ul className="flex flex-col m-2 p-3 bg-neutral-900 rounded">
          <li className="flex justify-between">
            <InputText labelText="Name:" defaultValue={user?.name}></InputText>
          </li>
          <li className="flex justify-between">
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
