import { forwardRef, InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error: string | undefined;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ labelText, error, className, ...props }, ref) => {
    return (
      <div className="relative flex flex-col items-center w-full ">
        <div className="bg-pirates-black-transparent  w-full">
          <label className="absolute top-0 left-0 px-1 text-sm w-full pointer-events-none text-gray-500">
            {labelText}
          </label>
          <input
            className=" pt-4 pl-3  bg-transparent border-transparent focus:outline-none w-full
             hover:border-pirates-gold focus:border-pirates-red border rounded
              border-neutral-500 text-pirates-gold"
            ref={ref}
            {...props}
          />
        </div>

        <span className="text-red-400 ml-2">{error}</span>
      </div>
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
