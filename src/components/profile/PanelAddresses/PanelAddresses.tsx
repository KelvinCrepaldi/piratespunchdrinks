import { useEffect, useState } from "react";
import { FormCreateAddress } from "../FormCreateAddress";
import { useSelector } from "react-redux";
import {
  deleteAddress,
  fetchAddresses,
} from "@/store/reducers/addressesReducer";
import { RootState, useAppDispatch } from "@/store/store";

export const PanelAddresses = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const addresses = useSelector(
    (state: RootState) => state.addresses.addresses
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchAddresses());
    }
  }, [dispatch, token]);

  const handleDeleteAddress = (id: string) => {
    dispatch(deleteAddress(id));
  };

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border-b-2  border-pirates-red  flex justify-between">
        <h1 className="font-inter">Endereços:</h1>
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
            + Adicionar novo endereço
          </button>
        )}
      </div>
      <FormCreateAddress isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" ">
        {addresses.map((address: any) => (
          <div
            key={address.id}
            className="flex flex-col m-2 p-3 bg-pirates-black border border-zinc-800 rounded"
          >
            <div className="flex justify-between border-b border-zinc-700 text-sm mb-4">
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
            <div className="flex flex-wrap space-x-5">
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
        {addresses.length == 0 ? (
          <div className="my-3">
            <span>
              Nenhum endereço cadastrado.{" "}
              <button className="text-green-200" onClick={handleOpenForm}>
                Adicione
              </button>{" "}
              um novo endereço!
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
