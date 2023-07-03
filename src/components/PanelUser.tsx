import { deleteAddress, fetchAddresses } from "@/store/actions/addresses";
import { fetchCreditCards } from "@/store/actions/creditCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormCreateAddress from "./FormCreateAddress";

export default function PanelUser() {
  const [user, setUser] = useState<any>(null);

  const getUser = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const getcreditCardsList = useSelector(
    (state: any) => state.creditCards.creditCards
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(getUser);
  }, [getUser, getAdressList, getcreditCardsList]);

  return (
    <div className="font-inter ">
      <div className="">
        <h1 className="border-b font-inter">User</h1>
        <ul className="flex flex-col m-2 p-3 bg-neutral-900">
          <li className="flex justify-between">
            <span>
              Name: <input defaultValue={user?.name}></input>
            </span>
          </li>
          <li className="flex justify-between">
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
