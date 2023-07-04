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
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
            + Add new address
          </button>
        )}
      </div>
      <FormCreateAddress isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" ">
        {addressList.map((address: any) => (
          <div
            key={address.id}
            className="flex flex-col m-2 p-3 bg-neutral-900 rounded"
          >
            <div className="flex justify-between border-b text-sm mb-4">
              <span className="">id: {address.id}</span>
              <button
                className="text-red-300"
                onClick={() => handleDeleteAddress(address.id)}
              >
                delete
              </button>
            </div>
            <div className="space-x-5">
              <span>
                <span className="text-pirates-gold">Address: </span>
                {address.address},<span>{address.number}</span>
              </span>

              <span>
                <span className="text-pirates-gold">Complement: </span>
                {address.complement}
              </span>
            </div>
            <div className="flex space-x-5">
              <span>
                <span className="text-pirates-gold">Country: </span>
                {address.country}
              </span>
              <span>
                <span className="text-pirates-gold">City: </span>
                {address.city}
              </span>
              <span>
                <span className="text-pirates-gold">State: </span>
                {address.state}
              </span>
            </div>
            <div>
              <span>
                <span className="text-pirates-gold">CEP: </span>
                {address.cep}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelAddresses;
