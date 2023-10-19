import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="w-full  rounded p-3 mt-1 border border-zinc-300 hover:to-zinc-100 bg-gradient-to-r from-zinc-100 to-zinc-200 shadow"
      {...props}
    >
      <p className="text-black font-bold">{children}</p>
    </button>
  );
};
