import { useEffect, useState } from "react";
import FormCreateAddress from "./FormCreateAddress";
import { useSelector } from "react-redux";
import { deleteAddress, fetchAddresses } from "@/store/actions/addresses";
import { RootState, useAppDispatch } from "@/store/store";

const PanelAddresses = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const addresses = useSelector(
    (state: RootState) => state.addresses.addresses
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchAddresses(token));
    }
  }, [dispatch, token]);

  const handleDeleteAddress = (id: string) => {
    dispatch(deleteAddress({ token, addressId: id }));
  };

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border-b-2  border-pirates-red  flex justify-between">
        <h1 className="font-inter">Addresses</h1>
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
            + Add new address
          </button>
        )}
      </div>
      <FormCreateAddress isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" ">
        {addresses.map((address: any) => (
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
