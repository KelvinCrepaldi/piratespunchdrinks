import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { createCreditCards } from "@/store/reducers/creditCardsReducer";
const FormCreateCreditCard = ({ isOpen = false, setIsOpen }: any) => {
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();

  const creditCardSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup
      .number()
      .required()
      .test("len", "Must be exactly 16 numbers", (val) => {
        return val.toString().length === 16;
      }),
    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format (MM/YY)")
      .required("Expiration date is required")
      .test("len", "Date shape incorrect. (MM/YY)", (val: any) => {
        return val.length === 5;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(creditCardSchema),
  });

  const handleCreateCreditCard = (e: any) => {
    const { name, number, expirationDate } = e;
    console.log(name);
    dispatch(createCreditCards({ name, number, expirationDate }));

    setIsOpen(!isOpen);
  };

  const handleIsOpen = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="border rounded p-2 m-1">
      <p className="text-xl">New credit card</p>
      <form
        className="flex flex-wrap space-y-2 space-x-1"
        onSubmit={handleSubmit(handleCreateCreditCard)}
      >
        <div>
          <span className="text-pirates-gold">Name: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name?.message && <span>{String(errors.name?.message)}</span>}
        </div>
        <div>
          <span className="text-pirates-gold">Number: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Number"
            type="number"
            {...register("number")}
          />
          {errors.number?.message && (
            <span>{String(errors.number?.message)}</span>
          )}
        </div>
        <div>
          <span className="text-pirates-gold">Expiration Date: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            type="text"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            placeholder="MM/YY"
            {...register("expirationDate")}
          />
          {errors.expirationDate?.message && (
            <span>{String(errors.expirationDate?.message)}</span>
          )}
        </div>
        <div className="flex justify-end w-full">
          <button
            className="border border-black rounded px-1 mx-1 cursor-pointer hover:text-green-400"
            type="submit"
          >
            Create
          </button>
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

export default FormCreateCreditCard;
