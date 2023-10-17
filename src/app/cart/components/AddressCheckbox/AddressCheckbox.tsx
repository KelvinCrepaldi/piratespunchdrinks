import { IAddress } from "@/interfaces/address.interface";
import { Info } from "../Info";

interface IAddressCheckboxProps {
  address: IAddress;
  handleSelectAddress: (address: IAddress) => void;
  selectedAddress: IAddress | false;
}

export const AddressCheckbox = ({
  address,
  selectedAddress,
  handleSelectAddress,
}: IAddressCheckboxProps): JSX.Element => {
  const formatAddress = `${address.address}, ${address.number}, ${address.complement} - ${address.city} - ${address.state} - ${address.country}`;

  return (
    <label
      className={`flex cursor-pointer rounded bg-zinc-300 shadow p-3 mt-1 border-l ${
        selectedAddress && selectedAddress.id === address.id
          ? "border-green-400"
          : "border-transparent hover:border-yellow-700"
      } hover:to-pirates-card-dark2 bg-gradient-to-r from-pirates-card-dark to-pirates-card-dark`}
    >
      <input
        className="mr-4 accent-green-600 bg-black text-red-500"
        type="checkbox"
        checked={
          selectedAddress && selectedAddress.id === address.id ? true : false
        }
        onChange={() => handleSelectAddress(address)}
      />
      <div>
        <div>
          <Info content={formatAddress} title="Endereço:" />
          <Info content={address.cep} title="CEP:" />
        </div>
      </div>
    </label>
  );
};
