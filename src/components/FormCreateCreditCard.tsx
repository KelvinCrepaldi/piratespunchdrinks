import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { createCreditCard } from "@/store/actions/creditCards";

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
    expiration_date: yup
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
    const body = e;
    console.log(e);
    dispatch(createCreditCard({ token, body }));

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
        <div></div>
        <div>
          <span className="text-pirates-gold">Name: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div>
          <span className="text-pirates-gold">Number: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            placeholder="Number"
            type="number"
            {...register("number")}
          />
        </div>
        <div>
          <span className="text-pirates-gold">Expiration Date: </span>
          <input
            className="bg-transparent border border-black rounded px-1"
            type="text"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            placeholder="MM/YY"
            {...register("expiration_date")}
          />
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
