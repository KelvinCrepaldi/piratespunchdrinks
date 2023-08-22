import { InputHTMLAttributes } from "react";
import { Controller, Control } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | null | undefined;
  control: Control<any, any>;
  mask?: string;
  disabled?: boolean;
}

export const Input = ({
  label,
  name,
  error = null,
  control,
  mask = "",
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      <label
        className={`font-bold  px-1 text-sm w-full pointer-events-none text-gray-300 top-0 left-0`}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...field } }) => (
          <InputMask
            mask={mask}
            className="bg-pirates-black rounded px-2 py-1 pl-2 focus:outline-none
              w-full hover:border-neutral-300 focus:border-pirates-red border 
            border-neutral-500 text-yellow-100 disabled:border-transparent"
            {...field}
            disabled={disabled}
            inputRef={ref}
            {...props}
          />
        )}
      />
      {error && <span className="text-red-400 ml-2">{error}</span>}
    </div>
  );
};
