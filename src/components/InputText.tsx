import { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: string | undefined;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ labelText, error, className, ...props }, ref) => {
    return (
      <>
        <div className="w-full">
          <label
            className={`font-bold  px-1 text-sm w-full pointer-events-none text-gray-300 top-0 left-0`}
          >
            {labelText}
          </label>
          <input
            className="bg-pirates-black rounded p-2 pl-3 focus:outline-none
              w-full hover:border-neutral-300 focus:border-pirates-red border 
            border-neutral-500 text-pirates-gold"
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

export default InputText;
