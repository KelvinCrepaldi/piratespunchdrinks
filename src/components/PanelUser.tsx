import { deleteAddress, fetchAddresses } from "@/store/actions/addresses";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PanelUser() {
  const [user, setUser] = useState<any>(null);
  const [addressList, setAddressList] = useState([]);

  const getUser = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(getUser);
    setAddressList(getAdressList);
  }, [getUser, getAdressList]);

  useEffect(() => {
    dispatch(fetchAddresses(token));
    console.log(addressList);
  }, [dispatch, token]);

  const handleDeleteAddress = (id: string) => {
    dispatch(deleteAddress({ token, addressId: id }));
  };

  return (
    <div className="font-inter">
      <div>
        <h1 className="border-b font-inter">User</h1>
        <ul className="">
          <li className="flex justify-between">
            <span>Name: {user?.name}</span>
            <button>change</button>
          </li>
          <li className="flex justify-between">
            <span>Email: {user?.email}</span>
            <button>change</button>
          </li>
          <li className="flex justify-between">
            <span>Password: ******...</span>
            <button>change</button>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="border-b font-inter">Addresses</h1>
        <div className=" ">
          {addressList.map((address: any) => (
            <div
              key={address.id}
              className="flex flex-col m-2 p-3 bg-neutral-900"
            >
              <div className="flex justify-between border-b text-sm mb-4">
                <span>id: {address.id}</span>
                <button onClick={() => handleDeleteAddress(address.id)}>
                  delete
                </button>
              </div>
              <div>
                Address:
                <span>{address.address}</span> ,<span>{address.number}</span>,
                <span>{address.complement}</span>
              </div>
              <div className="flex space-x-5">
                <span>Country: {address.country}</span>
                <span> City: {address.city}</span>{" "}
                <span>State: {address.state}</span>
              </div>
              <div>
                <span>CEP: {address.cep}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="border-b font-inter">Credit Cards</h1>
        <div className=" bg-slate-500">
          <p>{user?.credit_card}</p>
        </div>
      </div>
    </div>
  );
}
