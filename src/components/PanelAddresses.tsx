import { useEffect, useState } from "react";
import FormCreateAddress from "./FormCreateAddress";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress, fetchAddresses } from "@/store/actions/addresses";

const PanelAddresses = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [addressList, setAddressList] = useState([]);

  const token = useSelector((state: any) => state.auth.token);
  const getAdressList = useSelector((state: any) => state.addresses.addresses);

  useEffect(() => {
    setAddressList(getAdressList);
  }, [getAdressList]);

  useEffect(() => {
    dispatch(fetchAddresses(token));
  }, [dispatch, token]);

  const handleDeleteAddress = (id: string) => {
    dispatch(deleteAddress({ token, addressId: id }));
  };

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border-b font-inter flex justify-between">
        <h1>Addresses</h1>
        {!isOpen && <button onClick={handleOpenForm}>+ Add new address</button>}
      </div>
      <FormCreateAddress isOpen={isOpen} setIsOpen={setIsOpen} />
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
  );
};

export default PanelAddresses;
