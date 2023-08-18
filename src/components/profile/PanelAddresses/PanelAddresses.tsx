import { useEffect, useState } from "react";
import { FormCreateAddress } from "./components/FormCreateAddress";
import { useSelector } from "react-redux";
import {
  deleteAddress,
  fetchAddresses,
} from "@/store/reducers/addressesReducer";
import { RootState, useAppDispatch } from "@/store/store";
import { CardAddress } from "./components/CardAddress";
import { IAddress } from "@/interfaces/address.interface";

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

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border-b-2  border-pirates-red  flex justify-between">
        <h1 className="font-inter">Endereços</h1>
        {!isOpen && (
          <button className="text-green-200" onClick={handleOpenForm}>
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
