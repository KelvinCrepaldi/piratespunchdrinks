"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAddresses } from "@/store/reducers/addressesReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { IAddress } from "@/interfaces/address.interface";
import { FormCreateAddress } from "./components/FormCreateAddress";
import { CardAddress } from "./components/CardAddress";

const Address = (): JSX.Element => {
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

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border-b-2  border-pirates-red-strong  flex justify-between">
        <h4 className="text-pirates-red-strong">Meus endereços</h4>
        {!isOpen && (
          <button
            className="text-green-800 rounded py-1 px-4 hover:text-green-600"
            onClick={handleOpenForm}
          >
            + Adicionar novo endereço
          </button>
        )}
      </div>
      <FormCreateAddress isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" ">
        {addresses &&
          addresses.map((address: IAddress) => (
            <CardAddress key={address.id} address={address}></CardAddress>
          ))}
        {addresses && addresses.length == 0 ? (
          <div className="my-3">
            <span className="text-black">
              Nenhum endereço cadastrado.{" "}
              <button className="text-green-800" onClick={handleOpenForm}>
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

export default Address;
