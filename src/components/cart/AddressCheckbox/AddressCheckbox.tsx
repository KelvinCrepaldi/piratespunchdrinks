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
      className={`flex cursor-pointer bg-pirates-card-dark rounded p-3 mt-1 border-l ${
        selectedAddress && selectedAddress.id === address.id
          ? "border-green-400"
          : "border-transparent hover:border-yellow-700"
      }`}
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
          <Info content={address.number} title="CEP:" />
        </div>
      </div>
    </label>
  );
};