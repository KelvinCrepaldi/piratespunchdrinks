import { forwardRef, InputHTMLAttributes } from "react";
import ReactTextMask from "react-text-mask";

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: string | undefined;
}

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
  ({ labelText, error, className, ...props }, ref): JSX.Element => {
    return (
      <>
        <div className="w-full">
          <label
            className={`font-bold  px-1 text-sm w-full pointer-events-none text-gray-300 top-0 left-0`}
          >
            {labelText}
          </label>
          <input
            className="bg-zinc-100 rounded px-2 py-1 pl-2 focus:outline-none
            w-full hover:border-neutral-500 focus:border-pirates-red border 
          border-neutral-400 text-black disabled:border-transparent"
            ref={ref}
            {...props}
          />
          <span className="text-red-400 ml-2">{error}</span>
        </div>
      </>
    );
  }
);

InputText.displayName = "InputText";
