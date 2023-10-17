import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="w-full  rounded p-3 mt-1 border border-zinc-400 hover:to-zinc-300 bg-gradient-to-r from-zinc-300 to-zinc-200"
      {...props}
    >
      <p className="text-black">{children}</p>
    </button>
  );
};
