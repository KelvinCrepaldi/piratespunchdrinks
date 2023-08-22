import { InputHTMLAttributes } from "react";
import { Controller, Control } from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";

interface InputProps {
  label: string;
  name: string;
  error: string | null | undefined;
  control: Control<any, any>;
  disabled?: boolean;
  options: IOptions[];
}

interface IOptions {
  value: string;
  label: string;
}

export const CustomSelect = ({
  label,
  name,
  error = null,
  control,
  disabled = false,
  options = [],
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
        render={({ field: { onChange, value, name, ref, ...props } }) => (
          <Select
            options={options}
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={options[0]}
            {...props}
          />
        )}
      />
      {error && <span className="text-red-400 ml-2">{error}</span>}
    </div>
  );
};
