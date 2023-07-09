import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createAddress } from "@/store/actions/addresses";
import { RootState, useAppDispatch } from "@/store/store";

const FormCreateAddress = ({ isOpen = false, setIsOpen }: any) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const addressSchema = yup.object().shape({
    address: yup.string().required(),
    cep: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const handleCreateAddress = (e: any) => {
    const body = e;
    dispatch(createAddress({ token, body }));

    setIsOpen(!isOpen);
  };
  const handleIsOpen = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="border rounded p-2 m-1">
      <p className="text-xl">New address</p>
      <form
        className="flex flex-wrap space-y-2 space-x-1"
        onSubmit={handleSubmit(handleCreateAddress)}
      >
        <div className="ml-1 mt-2">
          <span className="text-pirates-gold">Address: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Address"
            {...register("address")}
          />
        </div>
        <div>
          <span className="text-pirates-gold"> Number: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Number"
            type="number"
            {...register("number")}
          />
        </div>
        <div>
          <span className="text-pirates-gold">Complement: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Complement"
            {...register("complement")}
          />{" "}
        </div>
        <div>
          <span className="text-pirates-gold"> CEP: </span>

          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Cep"
            type="number"
            {...register("cep")}
          />
        </div>

        <div>
          <span className="text-pirates-gold">City: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="City"
            {...register("city")}
          />
        </div>
        <div>
          <span className="text-pirates-gold">State: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="State"
            {...register("state")}
          />
        </div>

        <div>
          <span className="text-pirates-gold">Country: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Country"
            {...register("country")}
          />
        </div>

        <div className="flex justify-end w-full">
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-green-400"
            type="submit"
          >
            Create
          </button>{" "}
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-red-400"
            type="button"
            onClick={handleIsOpen}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : null;
};

export default FormCreateAddress;
